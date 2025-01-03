import Order from "../../models/Order.js";
import mongoose from "mongoose";

export async function getAllOrdersServices() {
  try {
    const orderSearch = await Order.find();

    if (!orderSearch || orderSearch.length === 0) {
      throw new Error("No orders found.");
    }
    const orders = orderSearch.map((orders) => orders.toJSON());

    return orders;
  } catch (error) {
    throw error;
  }
}

export async function getOrderByIdService(orderId) {
  try {
    if (!orderId) {
      throw new Error("Order ID is missing.");
    }
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      throw new Error("Invalid Product ID format.");
    }

    const order = await Order.findById(orderId);

    if (!order) {
      throw new Error(`Order with ID ${orderId} does not exist.`);
    }

    return order;
  } catch (error) {
    throw error;
  }
}

export async function createOrderService(orderDetails) {
  try {
    if (!orderDetails) {
      throw new Error("orderDetails is missing.");
    }

    const { userId, items, totalPrice } = orderDetails;

    if (!userId || !items || !totalPrice) {
      throw new Error("All required fields must be provided.");
    }

    const newOrder = new Order({
      userId,
      items,
      totalPrice
    });

    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
}

export async function updateOrderService(orderId, updateData) {
  try {
    if (!orderId) {
      throw new Error("Order ID is required.");
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      throw new Error(`Order with ID ${orderId} not found.`);
    }

    return updatedOrder;
  } catch (error) {
    throw new Error(`Error updating order: ${error.message}`);
  }
}

export async function deleteOrderService(orderId) {
  try {
    if (!orderId) {
      throw new Error("Order ID is required.");
    }

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      throw new Error(`Order with ID ${orderId} not found.`);
    }

    return { message: "Order deleted successfully.", deletedOrder };
  } catch (error) {
    throw new Error(`Error deleting Order: ${error.message}`);
  }
}
