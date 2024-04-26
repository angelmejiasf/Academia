const { DataTypes, Model, Sequelize } = require("sequelize");

const sequelize = new Sequelize("academia", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Cursos extends Model { }


Cursos.init({
    id_curso: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,

    },
    nombre_curso: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    precio_curso: {
        type: DataTypes.FLOAT,
        allowNull: false,
        
    },
    duracion_curso: {
        type: DataTypes.INTEGER,
        allowNull: false,
       
    }
}, {
    sequelize,
    modelName: "Cursos",
    timestamps: false,
    freezeTableName:true
})

// sequelize.sync()
//     .then(() => {
//         console.log("Tabla Cursos sincronizada");
//     })

module.exports = Cursos;