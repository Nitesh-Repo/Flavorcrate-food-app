import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    await food.save();
    res
      .status(201)
      .json({ success: true, message: "Food item added successfully", food });
  } catch (error) {
    console.error("Error adding food item:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to add food item" });
  }
};
// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, data: foods });
  } catch (error) {
    console.error("Error listing food items:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve food items" });
  }
};
// Remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, async (err) => {
      if (err) {
        console.error("Error deleting image file:", err);
      }
      await foodModel.findByIdAndDelete(req.body.id);
      res
        .status(200)
        .json({ success: true, message: "Food item removed successfully" });
    });
  } catch (error) {
    console.error("Error removing food item:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to remove food item" });
  }
};

export { addFood, listFood, removeFood };
