import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductModel",
    },
  ],
});

export const CartModel = mongoose.model("Cart", cartSchema);