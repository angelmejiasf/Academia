const { Op } = require("sequelize");
const Cursos=require("../models/cursos");
const Profesores = require("../models/profesores");

const crearCurso=async(curso)=>{
    const newCurso=await Cursos.create(curso);
    return newCurso;
}

const mostrarCursos=async()=>{
    const cursos=await Cursos.findAll({
        include:[{
            model:Profesores,
            attributes:["nombre_profesor"]
        }]
    })
    return cursos
}

const modificarCurso=async(modicurso,id_curso)=>{
    const modificurso=await Cursos.update(modicurso,{where:{id_curso:id_curso}})
    return modificurso;
}

const mostrarCursoPrecio=async(precio_curso)=>{
    const cursoprecio=await Cursos.findAll({where:{precio_curso:{[Op.between]:precio_curso,precio_curso}}})
    return cursoprecio
}

const mostrarCursoDuracion=async(duracion_curso)=>{
    
    const cursosduracion=await Cursos.findAll({where:{duracion_curso:{[Op.eq]:duracion_curso}}})
    return cursosduracion
}
module.exports={
    crearCurso,
    mostrarCursos,
    modificarCurso,
    mostrarCursoPrecio,
    mostrarCursoDuracion
}