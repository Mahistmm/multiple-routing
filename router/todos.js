const route = require("express").Router();
const todo = require("../data/todos");
const router = require("./user");

route.get("/",(req,res)=>{
    res.json(todo)
});

route.get("/:id",(req,res)=>{
    const todos = todo.find((tododata)=>tododata.id == req.params.id);
    if (todos){
        return res.json(todos)
    }
    res.json({msg: " todos is not found"})
});

module.exports = route