import { User } from "../models/user.models.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";  //!install express-validator for validating fields

export const createUserController = async (req, res) => {
    //?check for validation errors  
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    try {
        const user = await createUser(req.body)

        const token = user.generateJWT()  //generate JWT token for the user
        res.status(201).send({user, token})

    } catch (error) {
        console.log('❌ Server Register Error:', error); 
        res.status(400).send(error.message);
    }
}

export const loginUserController = async (req, res) => {
    //?check for validation errors  
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
    }

    try {
        const {email, password} = req.body
        const user = await User.findOne({email}).select('+password')  //select password field as it is not selected by default

        if(!user) {
            return res.status(401).json({errors: 'Invalid credentials'})
        }

        const isValidPassword = await user.isValidPassword(password)
        
        if(!isValidPassword) {
            return res.status(401).json({errors: 'Invalid credentials'})
        }

        const token = user.generateJWT()  //generate JWT token for the user
        res.status(200).json({user, token})

    } catch (error) {
        console.log('❌ Server Login Error:', error); 
        res.status(400).send(error.message);
    }
}

export const getUserProfileController = async (req, res) => {
    try {        
        res.status(200).json({
            user : req.user
        })
    } catch (error) {
        console.log('❌ Server Profile Error:', error); 
        res.status(400).send(error.message);
    }
}

