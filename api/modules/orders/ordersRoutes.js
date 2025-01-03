import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder
} from "./ordersControllers.js";
import { registerTag } from "../../../src/swagger/swaggerTags.js";

registerTag("Order", "Todas las rutas relacionadas a las ordenes");
const router = Router();

router.post("/createOrder", createOrder);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrder/:orderId", getOrder);
router.put("/updateOrder/:orderId", updateOrder);
router.delete("/deleteOrder/:orderId", deleteOrder);

export default router;
