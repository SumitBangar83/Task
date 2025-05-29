const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "123456"

router.post('/signup',async(req,res)=>{
    
    const{name,email,password} = req.body;
    console.log({name,email,password})
    console.log("request received")
    
    try{

        // Check if user exists
        const existingUser = await User.findOne({email});
        if (existingUser) return res.status(404).json({message:"User already exists"});

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User 
        const user = new User({name,email,password:hashedPassword});
        await user.save();

        res.status(201).json({message:"User Created Successfully"});
    }
    catch(err){
        res.status(500).json({error:"Signup failed"});
    }
});



router.post('/login',async(req,res) => {
    const {email,password} = req.body;

    try{
        // Check User
        const user = await User.findOne({email});

        if(!email) return res.status(404).json({message:"user not found"});
        
        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)return res.status(400).json({message:"Invalid credentials"});

        // Generate token 
        const token = jwt.sign( {id:user._id}, JWT_SECRET, {expiresIn : '1d'} );

        res.status(200).json({token , user:{ id: user._id, name: user.name, email: user.email } });

    }
    catch(err){
        res.status(500).json({ error:"login failed"});
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