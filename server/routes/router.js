const express = require("express");
const router = new express.Router();
const userdb = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// for user registration 

router.post("/register", async(req,res)=>{
    const {fname,email,password,cpassword} = req.body;
    if(!fname || !email || !password || !cpassword){
        res.status(422).json({error:"fill all the details"})
    }
    try {
        const preuser = await userdb.findOne({email:email});
        if(preuser){
            res.status(422).json({error:"This email is already Exist"})
        }else if(password !== cpassword){
            res.status(422).json({error:"password and confirmed password not match"})
        }else{
            const finaluser = new userdb({
                fname,email,password,cpassword
            });
            
            // here password hashing 
            const storeData = await finaluser.save();
            res.status(201).json({status:201,storeData});

        }
    } catch (error) {
        res.status(422).json(error);
        console.log("catch block error")
    }
})


//user login

router.post("/login", async(req,res)=>{
    // console.log(req.body);
    const {email,password} = req.body;
    if(!email || !password){
        res.status(422).json({error:"fill all the details"})
    }
    try {
        const userValid = await userdb.findOne({email:email});

        if(userValid){
            const isMatch = await bcrypt.compare(password,userValid.password);
            
            if(!isMatch){
                res.status(422).json({error:"invalid details"})
            }else {
                // token generate
                const token = await userValid.generateAuthtoken();

                // cookiegenerate
                res.cookie("usercookie",token,{
                    expiresIn:new Date(Date.now()+9000000),
                    httpOnly:true
                });

                const result = {
                    userValid,
                    token
                }
                res.status(201).json({status:201,result})
            }
        }

    }catch (error) {
        res.status(201).json(error);
        console.log("catch error");
    }
})

//user valid 

router.get("/validuser", authenticate,async(req,res)=>{
    try {
        const ValidUserone = await userdb.findOne({_id:req.userId});
        res.status(201).json({status:201,ValidUserone});
    } catch(error){
        res.status(401).json({status:401,error});
    }
})

module.exports = router;