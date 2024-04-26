const { DataTypes,Model,Sequelize } = require("sequelize");

const sequelize = new Sequelize("academia", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Matriculas extends Model{}


Matriculas.init({
   nota:{
    type:DataTypes.FLOAT,
    allowNull:false,
   }
},{
    sequelize,
    modelName:"Matriculas",
    timestamps:false,
    freezeTableName:true
})

// sequelize.sync()
//     .then(() => {
//         console.log("Tabla Matriculas sincronizada");
//     })

module.exports=Matriculas;