import {
  getAllProductsServices,
  createProductService,
  getProductByIdService,
  updateProductService,
  deleteProductService
} from "./productsServices.js";

export const createProduct = async (req, res) => {
  try {
    const product = await createProductService(req.body);
    
    return res.status(200).json({
      status: "success",
      result: true,
      product,
    });
  } catch (error) {
    console.error(`Error while fetching product: ${error.message}`);

    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code || "UNKNOWN_ERROR",
        message: error.message,
      },
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsServices(req.body);
    
    return res.status(200).json({
      status: "success",
      result: true,
      products,
    });
  } catch (error) {
    console.error(`Error while fetching products: ${error.message}`);

    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code || "UNKNOWN_ERROR",
        message: error.message,
      },
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(`Received request to get product with ID: ${productId}`);

    const product = await getProductByIdService(productId);
    console.log(`Product found:`, product);

    return res.status(200).json({
      status: "success",
      result: true,
      product,
    });
  } catch (error) {
    console.error(`Error code: ${error.code}, Error message: ${error.message}`);
    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code,
        message: error.message,
      },
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productId, updateData } = req.params;
    console.log(`Received request to get product with ID: ${productId}`);

    const product = await updateProductService(productId, updateData);
    console.log(`Product found:`, product);

    return res.status(200).json({
      status: "success",
      result: true,
      product,
    });
  } catch (error) {
    console.error(`Error code: ${error.code}, Error message: ${error.message}`);
    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code,
        message: error.message,
      },
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await deleteProductService(productId);

    return res.status(200).json({
      status: "success",
      result: true,
      product,
    });
  } catch (error) {
    console.error(`Error code: ${error.code}, Error message: ${error.message}`);
    return res.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code,
        message: error.message,
      },
    });
  }
};



