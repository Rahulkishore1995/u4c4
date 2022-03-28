const express =require("express");
const connect=require("./configs/db");


const userController=require("./controller/user.controller");
const todoController=require("./controller/todo.controller");
const app=express();
app.use(express.json());

app.use("/user",userController);

app.post("/register",register);
app.post("/login",login);

app.use("/todo",todoController);
app.listen(5000, async()=>{
    try {
        await connect();
        console.log("listining to port 5000")
    } catch (error) {
        console.log(error.message);
    }
})
