const { pokeStartsWith } = require('./startsWith');

const getByName = async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ error: 'Por favor, proporciona un nombre de Pokémon válido en la consulta.' });
    }

    const lowercaseName = name.toLowerCase();

    const PokeStartWith = await pokeStartsWith()

    const Pokeprueba = PokeStartWith.filter(pokemon => {
      const newName = pokemon.name.toLowerCase()
      return newName.startsWith(lowercaseName)
    })
    if (Pokeprueba.length) {
      return res.status(200).json(Pokeprueba)
    }

    res.status(400).json({ error: 'Error en la búsqueda de Pokémon.' })
  } catch (error) {
    res.status(500).json({ error: 'Error en la búsqueda de Pokémon.' });
  }
};

module.exports = {
  getByName,
};
