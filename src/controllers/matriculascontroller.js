const matriculaService=require("../services/matriculaservice");


const crearMatricula=async(req,res)=>{
    const newMatricula=await matriculaService.crearMatricula(req.body);
    res.json(newMatricula)
}

const mostrarMatricula=async(req,res)=>{
    const matricula=await matriculaService.mostrarMatricula();
    res.json(matricula)
}


module.exports={
    crearMatricula,
    mostrarMatricula
}