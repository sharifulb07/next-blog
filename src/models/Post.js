import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const PostSchema=new mongoose.Schema({
    title:{type:String, required:true},
    slug:{type:String, required:true, unique:true},
    content:{type:String, required:true},
    excerpt:String,
    coverImage:String,
    
})