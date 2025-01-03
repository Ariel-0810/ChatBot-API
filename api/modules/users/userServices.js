import bcrypt from "bcryptjs";
import User from "../../models/User.js";
import mongoose from "mongoose";

export async function getAllUsersServices() {
  try {
    const usersSearch = await User.find();

    if (usersSearch.length === 0) {
      throw new Error("No users found.");
    }

    if (!usersSearch || usersSearch.length === 0) {
      throw new Error("No users found.");
    }
    const users = usersSearch.map((users) => users.toJSON());

    return users;
  } catch (error) {
    throw error;
  }
}

export async function getUserByIdService(userId) {
  try {
    if (!userId) {
      throw new Error("User ID is missing.");
    }

    const user = await User.findById(userId);

    if (!user) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    return user;
  } catch (error) {
    throw error;
  }
}

export async function createUserService(data) {
  try {
    if (!data) {
      throw new Error("Data is missing.");
    }

    const { username, password, email } = data.objectData;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      role: 'user'
    });

    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`);
  }
}

export async function updateUserService(userId, objectData) {
  try {
    if (!userId || !objectData) {
      throw new Error("User ID or objectData is missing.");
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: objectData },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    return updatedUser;
  } catch (error) {
    throw new Error(
      error.message || "An error occurred while updating the user."
    );
  }
}

export async function deleteUserService(userId) {
  try {

    if (!userId) {
      throw new Error("User ID is missing.");
    }

    const objectId = new mongoose.Types.ObjectId(userId);

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error(`Invalid ObjectId format: ${userId}`);
    }

    const result = await User.deleteOne({
      _id: objectId
    });


    if (result.deletedCount === 0) {
      throw new Error(`User with ID ${userId} does not exist.`);
    }

    return result;
  } catch (error) {
    throw error;
  }
}
