import Book from "../model/book.model.js";

// Controller to get all books
export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "An error occurred while fetching books.", error });
    }
};
