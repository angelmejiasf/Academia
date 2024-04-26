const cursoService=require("../services/cursosservice");

const crearCurso=async(req,res)=>{
    const newCurso=await cursoService.crearCurso(req.body);
    res.json(newCurso)
}

const mostrarCursos=async(req,res)=>{
    const cursos=await cursoService.mostrarCursos();
    res.json(cursos);
}

const modificarCurso=async(req,res)=>{
    const id_curso=req.params.id_curso;
    const modificurso=await cursoService.modificarCurso(req.body,id_curso);
    res.json(modificurso)
}

const mostrarCursoPrecio=async(req,res)=>{
    const precio_curso=req.params.precio_curso;
    const cursosprecio=await cursoService.mostrarCursoPrecio(precio_curso);
    res.json(cursosprecio)
    
}

const mostrarCursoDuracion=async(req,res)=>{
    const duracion_curso=req.params.duracion_curso;
    const cursosduracion=await cursoService.mostrarCursoDuracion(duracion_curso);
    res.json(cursosduracion)
}
module.exports={
    crearCurso,
    mostrarCursos,
    modificarCurso,
    mostrarCursoPrecio,
    mostrarCursoDuracion
}