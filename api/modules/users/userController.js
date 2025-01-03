import {
  getAllUsersServices,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService
} from "./userServices.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersServices(req.body);

    return res.status(200).json({
      status: "success",
      result: true,
      users
    });
  } catch (error) {
    console.error(`Error while fetching users: ${error.message}`);

    return response.status(500).json({
      status: "error",
      result: false,
      errorDetails: {
        code: error.code || "UNKNOWN_ERROR",
        message: error.message
      }
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);

    return res.status(200).json({
      status: "success",
      result: true,
      user
    });
  } catch (error) {
    console.error(`Error while fetching users: ${error.message}`);

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

export const getUserId = async (req, res) => {
  try {
    const { userId } = req.params;    

    const user = await getUserByIdService(userId);    

    return res.status(200).json({
      status: "success",
      result: true,
      user
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

export const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { objectData } = req.body;
    const updatedUser = await updateUserService(userId, objectData);

    return res.status(200).json({
      status: "success",
      result: true,
      updatedUser
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

export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    
    await deleteUserService(userId);

    return res.status(200).json({
      status: "success",
      result: true,
      message: "User deleted successfully"
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
