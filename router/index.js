const Router = require("express").Router();
const userRouter = require("./user");
const todorouter = require("./todos")

Router.use("/user",userRouter);
Router.use("/todos",todorouter);

module.exports = Router