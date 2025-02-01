import foodModel from "../models/foodModel.js"
import fs from 'fs'

// adding food-item
export const addFoodItem = async (req,res) => {
    let img_filename = `${req.file.filename}`;
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: img_filename,
        category: req.body.category
    })
    try{
        await food.save();
        res.json({success: true, message: "Food Added Successfully!"})
    } catch(error){
        console.log(error)
        res.json({success: false, message: "Error!"})
    }
}

// printing all food-items
export const listFoodItem = async (req,res) => {
    try{
        const foods = await foodModel.find({}); //array of objects
        res.json({success: true, data: foods})
    } catch (error){
        console.log(error)
        res.json({success: false, message: "Error!"})
    }
}

// removing food-item
export const removeFoodItem = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{}) //removing from uploads folder
        await foodModel.findByIdAndDelete(req.body.id); //removing from database
        res.json({success: true, message: "Food Item removed"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}