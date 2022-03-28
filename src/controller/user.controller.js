const express=require("express");
const router=express.Router();

const User=require("../models/user.models");

router.get("",async(req,res)=>{
  try{
     const users=await User.find().lean().exec();
     return res.status(200).send({users:users})
  }catch(err){
      return res.status(500).send({message:'something went wrong'});

  }
});
router.post("",async(req,res)=>{
     
    try{
        const users=await User.create(req.body);
        return res.status(200).send({users:users})
     }catch(err){
         return res.status(500).send({message:'something went wrong'});
   
     }

})
module.exports=router;