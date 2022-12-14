const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");  //1. require the template engine

//built in middleware
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");  // 

//to set the view engine to hbs  --- same write 'view engine'
//if we use pug -- then 'view engine' -'pug'

app.set('view engine', "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);  //2. register the partials

app.get("", (req, res) => {
    res.render('index.hbs', {
        Feedback: "express api"
    })

})




app.listen(8000, () => {
    console.log("listening to the port 8000");
})
