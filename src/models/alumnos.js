const { DataTypes,Model,Sequelize } = require("sequelize");

const sequelize = new Sequelize("academia", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Alumnos extends Model{}


Alumnos.init({
  id_alumno:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  nombre_alumno:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  direccion_alumno:{
    type:DataTypes.STRING,
    allowNull:false,
    
  },
  media_alumno:{
    type:DataTypes.FLOAT,
    allowNull:false,
    
  }
},{
    sequelize,
    modelName:"Alumnos",
    timestamps:false,
    freezeTableName:true
})

// sequelize.sync()
//     .then(() => {
//         console.log("Tabla Alumnos sincronizada");
//     })

module.exports=Alumnos;