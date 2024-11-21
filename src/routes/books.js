import express from "express";
import { allBooks, addBook } from "../controllers/booksController";
import { uploadSingle } from "../middlewares/fileUploader";

const router = express.Router();

router.get("/", allBooks);
router.post("/",uploadSingle, addBook);

export default router;