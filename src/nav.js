const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.write("<h1>welcome to my home page</h1>");
    res.write("<h1>welcome to my home page</h1>");
    res.send();   //write it must to avoid loading condition -- if not used page will load
})
app.get("/about", (req, res) => {
    res.send("welcome to my About page");
})
app.get("/contact", (req, res) => {
    res.status(300).send("welcome to my Contact page");
})
app.get("/temp", (req, res) => {
    res.json({
        id: 1,
        name: "indranil"
    });
})

app.listen(3000, () => {
    console.log("listening to the port 3000");
})

// www.myapp.com -- welcome to my home page
// /about -- welcome to my about page
// /contact -- wlcome to my Contact page
// /temp -- welcome to temp page
