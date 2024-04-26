const Matriculas = require("../models/matriculas");

const matriculasroutes=require("express").Router();
const matriculasController=require("../controllers/matriculascontroller");

matriculasroutes.get("/",matriculasController.mostrarMatricula)



matriculasroutes.post("/",matriculasController.crearMatricula)
module.exports=matriculasroutes;