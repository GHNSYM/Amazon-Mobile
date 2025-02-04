const express=require('express');
const bcryptjs=require('bcrypt');
const User = require('../models/user');

const authRouter=express.Router();

authRouter.use(express.json);
authRouter.use(express.urlencoded({ extended: true }));

authRouter.post('/api/signup',async(req,res)=>{
    //get the data from the client
    console.log("Received data:", req.body); // Debugging line
    try{
        const {name,email,password}=req.body;

        const existingUser=await User.findOne({email});
        
        if(existingUser){
            return res.status(400).json({msg:'User with same email already exists!'});
        }
        const hashedPassword=await bcryptjs.hash(password,8);

        //post the data in database
        let user=new User({
            email,
            name,
            password:hashedPassword
        })
        user=await user.save();
        res.json(user);
    }
    catch(e){
        res.status(500);
    }
});

module.exports=authRouter;