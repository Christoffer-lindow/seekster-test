import { Router } from "express";
import { getTransactions, processPayment } from "../controllers/controller.transaction.js";
const router = Router();

router.get("/", getTransactions);
router.post("/", processPayment)

export default router;