const { Pokemon, Type } = require('../db');

const createOrUpdatePokemon = async (data) => {
    const { name, types, hp, attack, defense, image, speed, height, weight } = data;

    try {
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
            return existingPokemon;
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

            return newPokemon;
        }
    } catch (error) {
        throw new Error("Error al crear o actualizar el Pokémon");
    }
};

const createPokemon = async (req, res) => {
    try {
        const data = req.body;

        if (!data.name || !data.types || !data.hp || !data.attack || !data.defense || !data.image) {
            return res.status(400).json({ error: 'Por favor, proporciona todos los datos necesarios para crear o actualizar un Pokémon.' });
        }

        const pokemon = await createOrUpdatePokemon(data);

        res.status(201).json(pokemon);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPokemon,
};
