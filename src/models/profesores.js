const { DataTypes,Model,Sequelize} = require("sequelize");

const sequelize = new Sequelize("academia", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Profesores extends Model{}


Profesores.init({
    id_profesor:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    
    },
    nombre_profesor:{
        type:DataTypes.STRING,
        allowNull:false,
        
        
    },
    direccion_profesor:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    edad_profesor:{
        type:DataTypes.INTEGER,
        allowNull:false,
       
    },
    telefono_profesor:{
        type:DataTypes.STRING,
        allowNull:false,
        
    }
},{
    sequelize,
    modelName:"Profesores",
    timestamps:false,
    freezeTableName:true
})

// sequelize.sync()
//     .then(() => {
//         console.log("Tabla Profesor sincronizada");
//     })

module.exports=Profesores;