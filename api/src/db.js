const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: console.log("Connected"),
      native: false, 
   }
   );
   
const {PokemonModel, TypesModel} = require("./models/index")

PokemonModel(sequelize);
TypesModel(sequelize);

const {Pokemon, Type} = sequelize.models
Pokemon.belongsToMany(Type, {through: "pokemon_type"})
Type.belongsToMany(Pokemon, {through: "pokemon_type"})


module.exports = {
   ...sequelize.models,
   conn: sequelize, 
   Pokemon,
   Type
};


