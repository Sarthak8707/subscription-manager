import express, { Router } from "express";
import { UserModel } from "../models/Users.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UserModel.findOne({username});
    if(user){
        return res.json({message: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({username, password: hashedPassword});
    await newUser.save();
    return res.json({message: "New user created successfully"});

})

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    if(!user){
        return res.json({message: "User not found"})
    }
    const isTrue = await bcrypt.compare(password, user.password);
    if(!isTrue){
        return res.json({message: "Username or Password incorrect"});
    }
   

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({token, userID: user._id});

})

export {router as UserRouter};


