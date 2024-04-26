const express = require("express");
const app = express();
const bodyParser=require("body-parser")

const router = require("../routes/indexroutes");
const assotations=require("../database/assotations")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/cursos",router)

module.exports=app;