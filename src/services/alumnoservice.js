const Alumnos = require("../models/alumnos");
const Cursos = require("../models/cursos");
const Matriculas = require("../models/matriculas");

const crearAlumno = async (alumno) => {
    const newalumno = await Alumnos.create(alumno);
    return newalumno

}

const mostrarAlumnos = async () => {
    const alumnos = await Alumnos.findAll();
    return alumnos
}

const mostrarAlumnos2 = async (req, res) => {
    const alumnos = await Matriculas.findAll({
        attributes: [],
        include: [{
            model: Alumnos,
            attributes: ["nombre_alumno"],

        }, {
            model: Cursos,
            attributes: ["precio_curso"]
        }]
    });
    return alumnos
}

const mostrarAlumnosID=async(id_alumno)=>{
    const alumnos=await Alumnos.findAll({
        
       
        where:{id_alumno:id_alumno}
    });
    return alumnos
}

module.exports = {
    crearAlumno,
    mostrarAlumnos,
    mostrarAlumnos2,
    mostrarAlumnosID
}