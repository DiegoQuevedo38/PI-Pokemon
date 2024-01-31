const { getPokemonData } = require('./getPokemons');

const getByName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ error: 'Please provide a valid name on the search.' });
        }

        const lowercaseName = name.toLowerCase();
        const nameSearch = await getPokemonData();

        const filteredPokemon = nameSearch.filter((pokemon) => {
            const newName = pokemon.name.toLowerCase();
            return newName.startsWith(lowercaseName);
        });

        if (filteredPokemon.length) {
            return res.status(200).json(filteredPokemon);
        }

        res.status(400).json({ error: 'Error searching for Pokemons.' });
    } catch (error) {
        res.status(500).json({ error: 'Error searching for Pokemons.' });
    }
};

module.exports = {
    getByName,
};
