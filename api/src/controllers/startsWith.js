const { Pokemon, Type } = require("../db")
const axios = require("axios");
const URL = "http://pokeapi.co/api/v2/pokemon?limit=60";

const pokeStartsWith = async () => {

    const response = await axios.get(`${URL}`);

    const { results } = response.data;

    const allPokemons = await Promise.all( // Busqueda API
        results.map(async (pokemon) => {
            const pokemonData = await axios.get(pokemon.url);

            return {
                id: pokemonData.data.id,
                name: pokemonData.data.name,
                image: pokemonData.data.sprites.front_default,
                hp: pokemonData.data.stats.find((stat) => stat.stat.name === "hp").base_stat,
                attack: pokemonData.data.stats.find((stat) => stat.stat.name === "attack").base_stat,
                defense: pokemonData.data.stats.find((stat) => stat.stat.name === "defense").base_stat,
                speed: pokemonData.data.stats[5].base_stat,
                height: pokemonData.height,
                weight: pokemonData.weight,
                types: pokemonData.data.types.map((type) => type.type.name).join(` / `)
            };
        })
    );

    const Pokecreated = await Pokemon.findAll({ // Busqueda BDD
        include: [ // y le incluye su type
            {
                model: Type,
                attributes: ["name"],
                through: { attributes: [] }
            }]
    });

    const pokeDBFiltered = Pokecreated.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((type) => type.name).join(` / `)

    }))

    const respuestafinal = [...pokeDBFiltered, ...allPokemons]

    return respuestafinal; // Retornamos al otro controller


};

module.exports = {
    pokeStartsWith,
};