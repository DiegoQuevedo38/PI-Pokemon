const { Type } = require ("../db")
const axios = require("axios");
const URL = "https://pokeapi.co/api/v2/type";


const getTypes = async (req, res) => {
  try {
    const response = await axios.get(URL);

    if (!response || !response.data || !response.data.results) {
      return res.status(404).send('No se pudo obtener la lista de Types');
    }

    const { results } = response.data;

    const types = results.map((type, index) => ({
      id: index + 1,
      name: type.name,
    }));

    await Type.bulkCreate(types, { ignoreDuplicates: true });

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getTypes,
};


