import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

// Define route to get books
router.get("/", getBook);

export default router;
