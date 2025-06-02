const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "123456"

router.post('/signup',async(req,res)=>{
    
    const{email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"All Feilds Required"});
    }
    console.log({email,password})
    console.log("request received")
    
    try{

        // Check if user exists
        const existingUser = await User.findOne({email});
        console.log("user :",existingUser )
        if (existingUser) return res.status(404).json({message:"User already exists"});
        console.log("SignUp request recieved")
        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
        // Create User 
        console.log(verificationCode)
        const user = new User(
            {
                email,
                password:verificationCode,
                verificationCode
            });

        await user.save();
        
        res.status(201).json({message:"User Created Successfully data"});
        console.log("SignUp request Success")
    }
    catch(err){
        res.status(500).json({error:"Signup failed from beckend"});
    }
});



router.post('/login',async(req,res) => {
    const {email,password} = req.body;
    
    try{
        // Check User
        console.log("SignIn request recieved")
        if(!email || !password){
            return res.status(400).json({message:"All Feilds Required"});
        }

        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message:"user not found"});
        
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)return res.status(400).json({message:"Invalid credentials"});

        // Generate token 
        const token = jwt.sign( {id:user._id}, JWT_SECRET, {expiresIn : '1d'} );
        
        res.status(200).json({token , user:{ id: user._id, name: user.name, email: user.email } });
        console.log("SignIn request Success")
        
    }
    catch(err){
        res.status(500).json({ error:"login failed"});
        console.log("Signin req error ")
    }
    
});

router.delete('/deleteUser', async(req,res)=>{
    const {email} = req.body;

    try{
        const deletedUser = await User.findOneAndDelete({email});
        console.log("req received");
        if(!deletedUser) return res.status(404).json({message:"user not found"})

        res.status(201).json({message:"user profile deleted successfully",user:deletedUser});
    }
    catch(err){
        res.status.json({error:'deletion failed'});
    }
    
})

router.get('/findallUser',async(req,res)=>{
    try{
        const users = await User.find();
        res.status(201).json(users)
    }
    catch(err){
        res.status(500).json({error: 'failed to fetfh users '})
    }
})

router.put('/edit',async(req,res)=>{
    const {oldemail,newemail} = req.body;

    try{
        const isExists = await User.findOne({email:oldemail})
        if(!isExists) return res.status(404).json({message:"user not found"})
        
        isExists.email = newemail;
        await isExists.save();
        
        res.status(200).json({message:"user email updated successfully"})
    }
    catch(err){
        res.status(500).json({message:'email updation failed'})
    }

})

module.exports = router;