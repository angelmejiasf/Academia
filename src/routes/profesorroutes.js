const profesorroutes=require("express").Router()

const profesoresController=require("../controllers/profesorescontroller");


profesorroutes.post("/",profesoresController.crearProfesor)

profesorroutes.get("/",profesoresController.mostrarProfesores)

profesorroutes.get("/:edad_profesor",profesoresController.mostrarProfesorEdad)


module.exports=profesorroutes