import mongoose from "mongoose";

const Schema = mongoose.Schema;
const Id = mongoose.Types.ObjectId;

const BookSchema = new Schema({
    id: {
        type: Id,
        required: true,
        default: new Id(),
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", BookSchema);
export default Book;