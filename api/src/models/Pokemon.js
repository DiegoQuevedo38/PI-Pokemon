const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    BS_ID: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    HP: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    ATK: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DEF: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    height: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
  }, {
    timestamps: false,
    }
  )
};

