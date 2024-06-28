import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  image: {
    required: true,
    type: String,
  },
  active: {
    required: true,
    type: Boolean,
  },
});

export const ProductModel = mongoose.model("Product", productSchema);
