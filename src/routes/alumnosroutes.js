const alumnosroutes=require("express").Router()

const alumnosController=require("../controllers/alumnoscontroller");
const Alumnos = require("../models/alumnos");

alumnosroutes.post("/",alumnosController.crearAlumno)

alumnosroutes.get("/",alumnosController.mostrarAlumnos)

alumnosroutes.get("/allAlumnos",alumnosController.mostrarAlumnos2)

alumnosroutes.get("/:id_alumno",alumnosController.mostrarAlumnosID)

module.exports=alumnosroutes;