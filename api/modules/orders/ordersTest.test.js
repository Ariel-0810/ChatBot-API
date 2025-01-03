import request from "supertest";
import connectDB from "../../../src/config/db.js";
import { app, httpServer } from "../../../app.js";
import mongoose from "mongoose";

describe("Order tests", () => {
  let createOrderResponse;

  beforeAll(async () => {
    connectDB();
    await new Promise((resolve) => {
      httpServer.listen(3001, () => {
        resolve();
      });
    }, 30000);

    createOrderResponse = await request(app)
      .post("/order/createOrder")
      .set("Content-Type", "application/json")
      .send({
        orderDetails: {
          userId: "6776fac1d49ad6ac0ba041df",
          items: [
            {
              name: "California Roll",
              quantity: 2,
              price: 9.99
            },
            {
              name: "Sushi de atún",
              quantity: 1,
              price: 13.99
            }
          ],
          totalPrice: 33.97
        }
      });
  });

  describe("Create Order", () => {
    it('The response status is "success"', async () => {
      expect(createOrderResponse.body.status).toBe("success");
    });
    it("The request should bring a order object", async () => {
      expect(createOrderResponse.body).toHaveProperty("order");
    });

    it("The response contains a result object", async () => {
      expect(createOrderResponse.body.result).toBe(true);
    });
  });

  describe("Update Order", () => {
    let updateOrderResponse;
    let orderId;

    beforeAll(async () => {
      if (createOrderResponse.body && createOrderResponse.body.order) {
        orderId = createOrderResponse.body.order._id;
      } else {
        throw new Error("No se recibió un order válido");
      }
      updateOrderResponse = await request(app)
        .put(`/order/updateOrder/${orderId}`)
        .set("Content-Type", "application/json")
        .send({
          updateData: {
            items: [
              {
                name: "California Roll",
                quantity: 1,
                price: 9.99
              },
              {
                name: "Sushi de atún",
                quantity: 2,
                price: 13.99
              }
            ]
          }
        });
    });

    it('The response status is "success"', async () => {
      expect(updateOrderResponse.body.status).toBe("success");
    });

    it("The response should contain a order object", async () => {
      expect(updateOrderResponse.body).toHaveProperty("order");
    });

    it("The response contains a result object", async () => {
      expect(updateOrderResponse.body.result).toBe(true);
    });
  });

  describe("getAllOrders", () => {
    let getAllOrdersResponse;

    beforeAll(async () => {
      getAllOrdersResponse = await request(app)
        .get("/order/getAllOrders")
        .send();
    });

    it('should have a response status of "success"', async () => {
      expect(getAllOrdersResponse.body.status).toBe("success");
    });

    it("should return an array of products", async () => {
      expect(getAllOrdersResponse.body).toHaveProperty("orders");
    });

    it("the response from getAllOrders should contain an array of orders", async () => {
      expect(Array.isArray(getAllOrdersResponse.body.orders)).toBe(true);
    });
  });

  describe("getOrderById", () => {
    let getOrderResponse;
    let orderId;
    beforeAll(async () => {
      if (createOrderResponse.body && createOrderResponse.body.order) {
        orderId = createOrderResponse.body.order._id;
      } else {
        throw new Error("No se recibió un order válido");
      }
      getOrderResponse = await request(app)
        .get(`/order/getOrder/${orderId}`)
        .set("Content-Type", "application/json")
        .send();
    });

    it('should have a response status of "success"', async () => {
      expect(getOrderResponse.body.status).toBe("success");
    });

    it("should return a order object", async () => {
      expect(getOrderResponse.body).toHaveProperty("order");
    });

    it("the response contains a order object", async () => {
      expect(getOrderResponse.body.order).toBeInstanceOf(Object);
    });
  });

  describe("Delete order", () => {
    let deleteOrderResponse;
    let orderId;

    beforeAll(async () => {
      if (createOrderResponse.body && createOrderResponse.body.order) {
        orderId = createOrderResponse.body.order._id;
      } else {
        throw new Error("No se recibió un order válido");
      }
      deleteOrderResponse = await request(app)
        .delete(`/order/deleteOrder/${orderId}`)
        .set("Content-Type", "application/json")
        .send();
    });

    it('The response status is "success"', async () => {
      expect(deleteOrderResponse.body.status).toBe("success");
    });

    it("The response contains a result object", async () => {
      expect(deleteOrderResponse.body.result).toBe(true);
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
