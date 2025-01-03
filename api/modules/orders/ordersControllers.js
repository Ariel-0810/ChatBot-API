import {
  getAllOrdersServices,
  createOrderService,
  getOrderByIdService,
  updateOrderService,
  deleteOrderService
} from "./ordersServices.js";

export const createOrder = async (req, res) => {
  try {
    const { orderDetails } = req.body;

    const order = await createOrderService(orderDetails);

    if (!orderDetails) {
      throw new Error("Order details are missing.");
    }

    return res.status(200).json({
      status: "success",
      result: true,
      order
    });
  } catch (error) {
    console.error(`Error while fetching order: ${error.message}`);

    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code || "UNKNOWN_ERROR",
        message: error.message
      }
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await getAllOrdersServices(req.body);

    return res.status(200).json({
      status: "success",
      result: true,
      orders
    });
  } catch (error) {
    console.error(`Error while fetching orders: ${error.message}`);

    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code || "UNKNOWN_ERROR",
        message: error.message
      }
    });
  }
};

export const getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await getOrderByIdService(orderId);

    return res.status(200).json({
      status: "success",
      result: true,
      order
    });
  } catch (error) {
    console.error(`Error code: ${error.code}, Error message: ${error.message}`);
    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code,
        message: error.message
      }
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { updateData } = req.body;

    const order = await updateOrderService(orderId, updateData);

    return res.status(200).json({
      status: "success",
      result: true,
      order
    });
  } catch (error) {
    console.error(`Error code: ${error.code}, Error message: ${error.message}`);
    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code,
        message: error.message
      }
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await deleteOrderService(orderId);

    return res.status(200).json({
      status: "success",
      result: true,
      order
    });
  } catch (error) {
    console.error(`Error code: ${error.code}, Error message: ${error.message}`);
    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code,
        message: error.message
      }
    });
  }
};
