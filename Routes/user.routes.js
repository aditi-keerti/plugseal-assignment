const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../Models/User'); // Adjust the path as necessary


const userRouter = express.Router();
 userRouter.use(express.json());

//Route for user registration and login
userRouter.post('/register', async(req,res)=>{
    try{
        const {name, email, password,role} = req.body;
        const existing = await User.FindOne({where:{email}});
        if(existing){
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hashedPassword(password, 5);
        const user = await User.create({name, email, password: hashedPassword, role});
        res.status(201).json({message: 'User registered successfully', user});
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    }
 })
 userRouter.post('/login', async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({where:{email}});
        if(!user){
            return res.status(400).json({message: 'Invalid email or password'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid email or password'});
        }
        const token = jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message: 'Login successful', token});
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    }
 });


 module.exports={ userRouter };