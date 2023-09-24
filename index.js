//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password = "";

function displayHome(req,res){
    console.log(req.method);
    res.sendFile(__dirname+"/public/index.html");
}
function getPassKey(req,res,next){
    password = req.body["password"];
    next();
}
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

app.get("/",(req,res,next)=>{
    displayHome(req,res);
})
app.use(getPassKey);
app.post("/check",(req,res)=>{
    if(password === "ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html")
    }
    else{
       displayHome(req,res);
    }
})