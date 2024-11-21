import express from "express";
import booksRouter from "../routes/books";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

import 'dotenv/config'
import connectToDb from "../db/connection";
import errorHandler from "../middlewares/errorHandler";

connectToDb();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(ExpressMongoSanitize());
app.use(xss());
app.use(hpp());
app.use("/books", booksRouter);
app.get("/", (req, res)=>{
    res.json({message: "Welcome to the API"});
});

app.use(errorHandler);

export default app;