const router=require("express").Router()

const alumnosroutes = require("./alumnosroutes");
const cursosroutes = require("./cursosroutes");
const matriculasroutes = require("./matriculasroutes");
const profesorroutes = require("./profesorroutes");

router.use("/profesores",profesorroutes)
router.use("/cursos",cursosroutes)
router.use("/alumnos",alumnosroutes)
router.use("/matriculas",matriculasroutes)


module.exports=router;