import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const createPost = async(req,res)=>{
    const post =req.body;
    const newPost = new PostMessage(post);
    try {
        console.log(newPost);
        
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const updatePost
 = async(req,res) =>{
    const {id} = req.params;
    const post = req.body;
    const _id = id;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with this id');
    console.log('correct');
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new :true});

    res.json(updatedPost);

 }

 export const deletePost =async (req,res)=>{
    const {id} = req.params;
    const _id = id;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with this id');
    // console.log('correct');
 
        
        await PostMessage.findByIdAndDelete(_id);
        res.json('Post deleted Successfully');
 }

 export const likePost = async (req,res) => {
    const {id} = req.params;
    const _id = id;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with this id');

    const post = await PostMessage.findById(_id);
    console.log('Old');
    console.log(post);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount : post.likeCount + 1 }, {new : true})
    console.log('New')
    console.log(updatedPost)
    res.json(updatedPost);
 }