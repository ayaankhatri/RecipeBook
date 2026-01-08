import express from "express";
import Recipe from "../models/Recipe.js";

const router = express.Router();

/* GET all recipes */
router.get("/", async (req, res) => {
  try {
    const filter = req.query.type
      ? { type: new RegExp(`^${req.query.type}$`, "i") }
      : {};

    const recipes = await Recipe.find(filter);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

/* GET recipe by ID */
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    return res.json(recipe);
  } catch (error) {
    return res.status(400).json({ message: "Invalid ID" });
  }
});

/* POST a recipe */
router.post("/", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    return res.status(201).json(recipe);
  } catch (error) {
    return res.status(400).json({ error: "Failed to create recipe" });
  }
});

export default router;