const { Pokemon, Type } = require("../db");
const axios = require("axios");

const getPokemonDetailsFromAPI = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = response.data;

        return {
            id: pokemonData.id,
            name: pokemonData.name,
            image: pokemonData.sprites.front_default,
            hp: pokemonData.stats.find((stat) => stat.stat.name === "hp").base_stat,
            attack: pokemonData.stats.find((stat) => stat.stat.name === "attack").base_stat,
            defense: pokemonData.stats.find((stat) => stat.stat.name === "defense").base_stat,
            speed: pokemonData.stats[5].base_stat,
            height: pokemonData.height,
            weight: pokemonData.weight,
            types: pokemonData.types.map((type) => type.type.name).join(" / "),
        };
    } catch (error) {
        throw new Error(`Error al obtener detalles del Pokémon desde la API: ${error.message}`);
    }
};

const getPokemonDetailsFromDB = async (id) => {
    try {
        const pokemonFromDB = await Pokemon.findOne({
            where: { id: id },
            include: [
                {
                    model: Type,
                    through: { attributes: [] },
                },
            ],
        });

        if (!pokemonFromDB) {
            throw new Error("Pokémon no encontrado en la base de datos");
        }

        return {
            id: pokemonFromDB.id,
            name: pokemonFromDB.name,
            image: pokemonFromDB.image,
            hp: pokemonFromDB.hp,
            attack: pokemonFromDB.attack,
            defense: pokemonFromDB.defense,
            speed: pokemonFromDB.speed,
            height: pokemonFromDB.height,
            weight: pokemonFromDB.weight,
            types: pokemonFromDB.types.map((type) => type.name).join(" / "),
        };
    } catch (error) {
        throw new Error(`Error al obtener detalles del Pokémon desde la base de datos: ${error.message}`);
    }
};

const getId = async (req, res) => {
    try {
        const { id } = req.params;

        if (id.length > 4) {
            const pokeDetailsFromDB = await getPokemonDetailsFromDB(id);
            res.status(200).json(pokeDetailsFromDB);
        } else {
            const pokeDetailsFromAPI = await getPokemonDetailsFromAPI(id);
            res.status(200).json(pokeDetailsFromAPI);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getId,
};
