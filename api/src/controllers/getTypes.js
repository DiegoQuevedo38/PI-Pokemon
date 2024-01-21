const { Type } = require ("../db")
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type/";


const getTypes = async (req, res) =>{
try {
    const response = await axios.get(`${URL}`);

    if (!response) {
        return res.status(404).send("No se pudo obtener la lista de Types");
      }
      const { results } = response.data;

      for(const poketype of results){
        const findtype = await Type.findOrCreate({where: {name: poketype.name},
        })
      }
        return res.status(200).json(results)   
} catch (error) {
    return res.status(500).send(error.message)
}
}

module.exports = {
  getTypes,
};
