import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cost: {type: Number, required: true},
    tag: {type: String},
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true}
}) 

export const SubscriptionModel = mongoose.model("subscriptions", SubscriptionSchema);