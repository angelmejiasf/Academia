const Alumnos = require("../models/alumnos");
const Cursos = require("../models/cursos");
const Matriculas = require("../models/matriculas");
const Profesores = require("../models/profesores");
const {Op}=require("sequelize")

const crearMatricula=async(matricula)=>{
    const newMatricula=await Matriculas.create(matricula)
    return newMatricula;
}

const mostrarMatricula=async()=>{
    const matricula=await Matriculas.findAll({
        attributes:["nota"],
        include:[{
            model:Alumnos,
            attributes:["nombre_alumno","direccion_alumno"]
        },{
            model:Cursos,
            attributes:["nombre_curso","precio_curso"],
            include:[{
                model:Profesores,
                attributes:["nombre_profesor"]
            }],
            where:{precio_curso:{[Op.gt]:100}}
        }],where:{nota:{[Op.gt]:5}}
    })
    return matricula
}
module.exports={
    crearMatricula,
    mostrarMatricula
}