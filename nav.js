// www.myapp.com -- welcome to my home page
// /about -- welcome to my about page
// /contact -- wlcome to my Contact page
// /temp -- welcome to temp page

const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("welcome to my home page");
    // console.log(req);
})
app.get("/about",(req,res) => {
    res.send("welcome to my About page");
})
app.get("/contact",(req,res) => {
    res.send("welcome to my Contact page");
})
app.get("/temp",(req,res) => {
    res.status(300).send("welcome to temparature page");
})

app.listen(3000, () =>{
    console.log("listening to the port 3000");
})