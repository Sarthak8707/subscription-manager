import express from 'express';
import cors from "cors";
import mongoose from 'mongoose'
import { UserModel } from './models/Users.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI).then(() => {
    "mongodb connected"
}).catch((err) => console.error("Connection error:", err));





app.listen(3001, () => {
    console.log("Server Started");
})