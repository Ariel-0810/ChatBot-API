import Product from "../../models/Product.js";
import mongoose from "mongoose";

export async function getAllProductsServices() {
  try {
    const productSearch = await Product.find();

    if (!productSearch || productSearch.length === 0) {
      throw new Error("No products found.");
    }
    const products = productSearch.map((products) => products.toJSON());

    return products;
  } catch (error) {
    throw error;
  }
}

export async function getProductByIdService(productId) {
  try {
    if (!productId) {
      throw new Error("Product ID is missing.");
    }

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      throw new Error("Invalid Product ID format.");
    }

    const product = await Product.findById(productId);

    if (!product) {
      throw new Error(`Product with ID ${productId} does not exist.`);
    }

    return product;
  } catch (error) {
    throw error;
  }
}

export async function createProductService(data) {
  try {
    if (!data) {
      throw new Error("Data is missing.");
    }
    const {
      name,
      description,
      price,
      category,
      ingredients,
      image,
      availability
    } = data.objectData;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !ingredients ||
      !image
    ) {
      throw new Error("All required fields must be provided.");
    }
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      ingredients,
      image,
      availability
    });

    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
}

export async function updateProductService(productId, updateData) {
  try {
    if (!productId) {
      throw new Error("Product ID is required.");
    }

    if (!updateData || Object.keys(updateData).length === 0) {
      throw new Error("No data provided for update.");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      throw new Error(`Product with ID ${productId} not found.`);
    }

    return updatedProduct;
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
}

export async function deleteProductService(productId) {
  try {
    if (!productId) {
      throw new Error("Product ID is required.");
    }

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      throw new Error(`Product with ID ${productId} not found.`);
    }

    return { message: "Product deleted successfully.", deletedProduct };
  } catch (error) {
    throw new Error(`Error deleting product: ${error.message}`);
  }
}
