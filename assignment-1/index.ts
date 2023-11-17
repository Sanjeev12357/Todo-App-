
import express from "express";
const app = express();
import mongoose from "mongoose";
const port = 3000;
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";


app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

const mongoDBUri = "mongodb+srv://Sanjeev1:Sanjeev123@cluster0.ybrdh6e.mongodb.net/yourdatabase";

mongoose.connect(mongoDBUri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
