const profesorService=require("../services/profesoreservice");

const crearProfesor=async(req,res)=>{
    const newprofesor=await profesorService.crearProfesor(req.body);
    res.json(newprofesor)
}

const mostrarProfesores=async(req,res)=>{
    const profesor=await profesorService.mostrarProfesores();
    res.json(profesor)
}

const mostrarProfesorEdad=async(req,res)=>{
    const edad_profesor=req.params.edad_profesor;
    const profesor=await profesorService.mostrarProfesorEdad(edad_profesor);
    res.json(profesor)
}
module.exports={
    crearProfesor,
    mostrarProfesores,
    mostrarProfesorEdad
}