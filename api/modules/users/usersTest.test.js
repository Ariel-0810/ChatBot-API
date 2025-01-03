import request from "supertest";
import connectDB from "../../../src/config/db.js";
import { app, httpServer } from "../../../app.js";
import mongoose from "mongoose";

describe("User tests", () => {
  let createUserResponse;

  beforeAll(async () => {
    connectDB();
    await new Promise((resolve) => {
      httpServer.listen(3001, () => {
        resolve();
      });
    }, 30000);

    createUserResponse = await request(app)
      .post("/users/createUser")
      .set("Content-Type", "application/json")
      .send({
        objectData: {
          username: "UsuarioTest",
          password: "Pass123@",
          email: "example@example.com"
        }
      });
  });

  describe("Create User", () => {
    it('The response status is "success"', async () => {
      expect(createUserResponse.body.status).toBe("success");
    });
    it("The request should bring a user object", async () => {
      expect(createUserResponse.body).toHaveProperty("user");
    });

    it("The response contains a result object", async () => {
      expect(createUserResponse.body.result).toBe(true);
    });
  });

  describe("Update User", () => {
    let updateUserResponse;
    let userId;

    beforeAll(async () => {
      if (createUserResponse.body && createUserResponse.body.user) {
        userId = createUserResponse.body.user._id;
      } else {
        throw new Error("No se recibió un usuario válido");
      }
      updateUserResponse = await request(app)
        .put(`/users/updateUser/${userId}`)
        .set("Content-Type", "application/json")
        .send({
          objectData: {
            username: "UsuarioTestUpdate"
          }
        });
    });

    it('The response status is "success"', async () => {
      expect(updateUserResponse.body.status).toBe("success");
    });

    it("The response should contain a user object", async () => {
      expect(updateUserResponse.body).toHaveProperty("updatedUser");
    });

    it("The response contains a result object", async () => {
      expect(updateUserResponse.body.result).toBe(true);
    });
  });

  describe("getAllUsers", () => {
    let getAllUsersResponse;

    beforeAll(async () => {
      getAllUsersResponse = await request(app).get("/users/getAllUsers").send();
    });

    it('should have a response status of "success"', async () => {
      expect(getAllUsersResponse.body.status).toBe("success");
    });

    it("should return an array of users", async () => {
      expect(getAllUsersResponse.body).toHaveProperty("users");
    });

    it("the response from getAllUsers should contain an array of users", async () => {
      expect(Array.isArray(getAllUsersResponse.body.users)).toBe(true);
    });
  });

  describe("getUserById", () => {
    let getUserResponse;
    let userId;
    beforeAll(async () => {
      if (createUserResponse.body && createUserResponse.body.user) {
        userId = createUserResponse.body.user._id;
      } else {
        throw new Error("No se recibió un usuario válido");
      }
      getUserResponse = await request(app)
        .get(`/users/getUserById/${userId}`)
        .set("Content-Type", "application/json")
        .send();
    });

    it('should have a response status of "success"', async () => {
      expect(getUserResponse.body.status).toBe("success");
    });

    it("should return a user object", async () => {
      expect(getUserResponse.body).toHaveProperty("user");
    });

    it("the response contains a user object", async () => {
      expect(getUserResponse.body.user).toBeInstanceOf(Object);
    });
  });

  describe("Delete user", () => {
    let deleteUserResponse;
    let userId;

    beforeAll(async () => {
      if (createUserResponse.body && createUserResponse.body.user) {
        userId = createUserResponse.body.user._id;
      } else {
        throw new Error("No se recibió un usuario válido");
      }
      deleteUserResponse = await request(app)
        .delete(`/users/deleteUser/${userId}`)
        .set("Content-Type", "application/json")
        .send();
    });

    it('The response status is "success"', async () => {
      expect(deleteUserResponse.body.status).toBe("success");
    });

    it("The response contains a result object", async () => {
      expect(deleteUserResponse.body.result).toBe(true);
    });
  });

  afterAll(async () => {
    await new Promise((resolve) => {
      mongoose.connection.close();
      httpServer.close(() => {
        console.log("Servidor cerrado");
        resolve();
      });
    });
  });
});
