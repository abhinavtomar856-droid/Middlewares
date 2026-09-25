const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

//Utility Midddleware
// app.use((req,res,next) =>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.path,req.hostname,req.method,req.time);
//     return next();
// })

// //Multiple middlewares
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

// //Error Handler(Middleware)
// app.get("/err",(req,res)=>{
//     abcd = abcd;
// })

// app.use((err,req,res,next) =>{
//     console.log(err);
//     next(err);
// });

// app.use("/",(req,res)=>{
//     res.send("Hi i am root");
// })

app.listen("8080",(req,res)=>{
    console.log("Server is listening for the port 8080");
});