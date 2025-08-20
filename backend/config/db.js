import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://flavorcrate:8299745297@cluster0.adt74ni.mongodb.net/flavorcrate').then(()=>console.log("DB connected"));
}