import express from "express";
import dotenv from "dotenv";

import transactionRoute from "./routes/route.transaction.js";
import itemRoute from "./routes/route.item.js";
import connectDB from "./db/db.js";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT ? process.env.PORT : 8000;
const DB_URI = process.env.DB_URI;
connectDB(DB_URI);

app.use("/api/transactions", transactionRoute);
app.use("/api/items", itemRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});