import request from "supertest";
import connectDB from "../../../src/config/db.js";
import { app, httpServer } from "../../../app.js";
import mongoose from "mongoose";

describe("Login tests", () => {
  let createUserResponse;

  beforeAll(async () => {
    connectDB();
    await new Promise((resolve) => {
      httpServer.listen(3001, () => {
        resolve();
      });
    }, 30000);

    // Crear un usuario para probar el login
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

  describe("Login", () => {
    it("should return success when valid credentials are provided", async () => {
      const loginResponse = await request(app)
        .post("/auth/login")
        .set("Content-Type", "application/json")
        .send({
          email: "example@example.com",
          password: "Pass123@"
        });

      expect(loginResponse.body.status).toBe("success");
      expect(loginResponse.body).toHaveProperty("user");
    });

    it("should return error if email is incorrect", async () => {
      const loginResponse = await request(app)
        .post("/auth/login")
        .set("Content-Type", "application/json")
        .send({
          email: "UsuarioInexistente",
          password: "Pass123@"
        });

      expect(loginResponse.status).toBe(400);
      expect(loginResponse.body.status).toBe("error");
      expect(loginResponse.body.message).toBe("Usuario no encontrado");
    });

    it("should return error if password is incorrect", async () => {
      const loginResponse = await request(app)
        .post("/auth/login")
        .set("Content-Type", "application/json")
        .send({
          email: "example@example.com",
          password: "WrongPassword"
        });

      expect(loginResponse.status).toBe(400);
      expect(loginResponse.body.status).toBe("error");
      expect(loginResponse.body.message).toBe("Credenciales invalidas");
    });
  });

  afterAll(async () => {
    let deleteUserResponse;
    let userId;

    if (createUserResponse.body && createUserResponse.body.user) {
      userId = createUserResponse.body.user._id;
    } else {
      throw new Error("No se recibió un usuario válido");
    }
    // Elimina el usuario creado para probar el login
    deleteUserResponse = await request(app)
      .delete(`/users/deleteUser/${userId}`)
      .set("Content-Type", "application/json")
      .send();
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
