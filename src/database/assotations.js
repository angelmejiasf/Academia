const Alumnos = require("../models/alumnos");
const Cursos = require("../models/cursos");
const Matriculas = require("../models/matriculas");
const Profesores = require("../models/profesores");

// Un alumno puede estar matriculado en varios cursos
// Alumnos.hasMany(Matriculas)
// // Un curso tienes varias matriculas
// Cursos.hasMany(Matriculas)

Matriculas.belongsTo(Cursos)
Matriculas.belongsTo(Alumnos)

Cursos.belongsToMany(Alumnos,{through:Matriculas})
Alumnos.belongsToMany(Cursos,{through:Matriculas})

// Un curso solo tiene un profesor
Cursos.belongsTo(Profesores)
// Un profesor tiene varios cursos
Profesores.hasMany(Cursos)

