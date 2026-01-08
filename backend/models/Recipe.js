import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  ingredients: {
    type: [String]
  },
  type: {
    type: String,
    enum: ["veg", "non-veg"],
    required: true
  }
});

export default mongoose.model("Recipe", recipeSchema);