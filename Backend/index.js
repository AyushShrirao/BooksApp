import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
(async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process if connection fails
    }
})();

// Mongoose event listeners
mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to MongoDB");
});
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected from MongoDB");
});

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
