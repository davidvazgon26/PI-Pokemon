const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4  //Generacion aut de id
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    force: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defending: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  // { 
  //   timestamps: false, 
  //   freezeTableName: true, detiene la pluralizacion
  // }
  );
};
