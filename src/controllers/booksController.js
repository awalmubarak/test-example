import asyncHandler from "../middlewares/asynHandler";
import ErrorResponse from "../common/errorResponse";
import Book from "../models/Book";

export const allBooks = asyncHandler(async (req, res, next) => {
    const books = await Book.find({}, 'title description').sort({title: "asc"});
    res.status(200).json({success: true, data: books});
});

export const addBook = asyncHandler(async (req, res, next) => {
    // validate request
    if (!req.body.title || !req.body.description) {
        throw new ErrorResponse(400, "Please provide title and description");
    }
    const book = await Book.create(req.body);
    const { _id:id, title, description } = book;
    res.status(201).json({success: true, data: {id, title, description}});
})