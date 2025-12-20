import express from "express";
import { SubscriptionModel } from "../models/Subscriptions.js";

const router = express.Router();

// Get the subscriptions of the user
router.get("/:id", async (req, res) => {
    
  try{ 
    const id = req.params.id;
    const response = await SubscriptionModel.find({createdBy: id})
    return res.json(response)
  }  
  catch(err){
    console.log(err)
  }

} )

// Add a new subscription for the user

router.post("/", async (req, res) => {
    try{
        const { subscription } = req.body;
        const newSubscription = new SubscriptionModel(subscription);
        await newSubscription.save();
        res.json({message: "New Subscription added!"})
    }
    catch(err){
        console.log(err)
    }
})


export {router as SubscriptionRouter}