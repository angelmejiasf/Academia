const { Op } = require("sequelize");
const Profesores = require("../models/profesores");

const crearProfesor=async(profesor)=>{
    const newprofesor=await Profesores.create(profesor);
    return newprofesor
}

const mostrarProfesores=async()=>{
    const profesor=await Profesores.findAll();
    return profesor
}

const mostrarProfesorEdad=async(edad_profesor)=>{
    
    const profesor=await Profesores.findAll({
        attributes:["nombre_profesor","edad_profesor"],
        where:{edad_profesor:{[Op.gt]:edad_profesor}}

    })

    return profesor
}
module.exports={
    crearProfesor,
    mostrarProfesores,
    mostrarProfesorEdad
}