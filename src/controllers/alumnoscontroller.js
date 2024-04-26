const alumnoservice=require("../services/alumnoservice");

const crearAlumno=async(req,res)=>{
    const newalumno=await alumnoservice.crearAlumno(req.body);
    res.json(newalumno)

}

const mostrarAlumnos=async(req,res)=>{
    const alumnos=await alumnoservice.mostrarAlumnos();
    res.json(alumnos)
}

const mostrarAlumnos2=async(req,res)=>{
    const alumnos=await alumnoservice.mostrarAlumnos2();
    res.json(alumnos)
}

const mostrarAlumnosID=async(req,res)=>{
    const id_alumno=req.params.id_alumno;
    const alumnos=await alumnoservice.mostrarAlumnosID(id_alumno);
    res.json(alumnos)
}


module.exports={
    crearAlumno,
    mostrarAlumnos,
    mostrarAlumnos2,
    mostrarAlumnosID
}