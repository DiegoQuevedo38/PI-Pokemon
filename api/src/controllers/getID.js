const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getId = async (req, res) => {
  try {
    const { id } = req.params;

    if (id.length > 4) {
      const pokemonFromDB = await Pokemon.findOne({
          where: { id: id },
          include: [
            {
              model: Type,
              through: { attributes: [] }, 
            },
          ],
      });
      
      if (pokemonFromDB) {
        const pokeDBFiltered = {
          id: pokemonFromDB.id,
          name: pokemonFromDB.name,
          image: pokemonFromDB.image,
          hp: pokemonFromDB.hp,
          attack: pokemonFromDB.attack,
          defense: pokemonFromDB.defense,
          speed: pokemonFromDB.speed,
          height: pokemonFromDB.height,
          weight: pokemonFromDB.weight,
          types: pokemonFromDB.types.map((type)=>type.name).join(` / `)
        };
        
        return res.status(200).json(pokeDBFiltered);
      }
    
  }

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemonData = response.data;

    const pokemonDetails = {
      id: pokemonData.id,
      name: pokemonData.name,
      image: pokemonData.sprites.front_default,
      hp: pokemonData.stats.find((stat) => stat.stat.name === "hp").base_stat,
      attack: pokemonData.stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: pokemonData.stats.find((stat) => stat.stat.name === "defense").base_stat,
      speed: pokemonData.stats[5].base_stat,
      height: pokemonData.height,
      weight: pokemonData.weight,
      types: pokemonData.types.map((type)=>type.type.name).join(` / `)     
    };


    return res.status(200).json(pokemonDetails);
    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getId,
}
