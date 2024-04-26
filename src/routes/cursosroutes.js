const cursosroutes=require("express").Router()

const cursoscontroller=require("../controllers/cursoscontroller");


cursosroutes.post("/",cursoscontroller.crearCurso)

cursosroutes.get("/",cursoscontroller.mostrarCursos)

cursosroutes.put("/:id_curso",cursoscontroller.modificarCurso)

cursosroutes.get("/:precio_curso/:precio_curso",cursoscontroller.mostrarCursoPrecio)

cursosroutes.get("/:duracion_curso",cursoscontroller.mostrarCursoDuracion)



module.exports=cursosroutes