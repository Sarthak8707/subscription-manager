import express from 'express';
import cors from "cors";
import mongoose from 'mongoose'
import { UserModel } from './models/Users.js';
import dotenv from 'dotenv';
import { UserRouter } from './routes/auth.js';
import { SubscriptionRouter } from './routes/subscriptions.js';
import { SubscriptionModel } from './models/Subscriptions.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI).then(() => {
   console.log ("mongodb connected")
}).catch((err) => console.error("Connection error:", err));

app.use("/users", UserRouter)
app.use("/subscriptions", SubscriptionRouter)




app.listen(3001, () => {
    console.log("Server Started");
})