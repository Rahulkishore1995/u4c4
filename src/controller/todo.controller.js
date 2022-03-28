const express=require("express");
const router=express.Router();

const Todo=require("../models/todo.models");

router.get("",async(req,res)=>{
  try{
     const todo=await Todo.find().lean().exec();
     return res.status(200).send({todo:todo})
  }catch(err){
      return res.status(500).send({message:'something went wrong'});

  }
});
router.post("",async(req,res)=>{
     
    try{
        const todo=await Todo.create(req.body);
        return res.status(200).send({todo:todo})
     }catch(err){
         return res.status(500).send({message:'something went wrong'});
   
     }

})
module.exports=router;