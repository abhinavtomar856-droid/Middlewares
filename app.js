const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

//Utility Midddleware
app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    console.log(req.path,req.hostname,req.method,req.time);
    return next();
})

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

app.use((err,req,res,next) =>{
    let{status,message} = err;
    console.log("ERROR OCCURED");
    res.status(status).send(message);
})

//Error Handler(Middleware)
app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.use((err,req,res,next) =>{
    let{status=500,message="Some error occured"} = err;
    res.status(status).send(message);
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err) => next(err));
    }
}
//Small Activity to learn custom middleware
//Handle errors using try and catch
app.get("/admin",asyncWrap (async(req,res,next)=>{
    skdk = sdk;   
}));

app.use((err,req,res,next)=>{
    let{status=403,message="Error occured in admin route"} = err;
    res.status(status).send(message);
});

app.use((err,req,res,next) =>{
    console.log(err);
    next()
});

app.use("/",(req,res)=>{
    res.send("Hi i am root");
})

app.listen("8080",(req,res)=>{
    console.log("Server is listening for the port 8080");
});