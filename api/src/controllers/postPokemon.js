const { Pokemon, Type } = require('../db'); 


const createPokemon = async (req, res) => {
  try {
    const { name, types, hp, attack, defense, image, speed, height, weight } = req.body;
    
    if (!name || !types || !hp || !attack || !defense || !image) {
      return res.status(400).json({ error: 'Por favor, proporciona todos los datos necesarios para crear un Pokémon.' });
    }

    let existingPokemon = await Pokemon.findOne({ where: { name } });

    if (existingPokemon) {
      existingPokemon = await existingPokemon.update({
        name,
        hp: parseInt(hp),
        attack: parseInt(attack),
        defense: parseInt(defense),
        speed: parseInt(speed),
        height: parseInt(height),
        weight: parseInt(weight),
        image,
      });

      const typeRecords = await Type.findAll({
        where: {
          name: types,
        },
      });

      await existingPokemon.setTypes(typeRecords);
      return res.status(200).json(existingPokemon);
      
    } else {

      const newPokemon = await Pokemon.create({
        name,
        hp: parseInt(hp),
        attack: parseInt(attack),
        defense: parseInt(defense),
        speed: parseInt(speed),
        height: parseInt(height),
        weight: parseInt(weight),
        image,
      });

      const typeRecords = await Type.findAll({
        where: {
          name: types,
        },
      });

      await newPokemon.setTypes(typeRecords);

      return res.status(201).json(newPokemon);
    }

    
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPokemon,
};
