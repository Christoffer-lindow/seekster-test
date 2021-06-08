import { Router } from "express";
import { getItems, createItem } from "../controllers/controller.item.js";
const router = Router();

router.get("/", getItems);
router.post("/", createItem);

export default router;