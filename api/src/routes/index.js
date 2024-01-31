const { createPokemon } = require("../controllers/PostPokemon");
const { getPokedex } = require("../controllers/getPokemons");
const { getByName } = require("../controllers/getByName");
const { getTypes } = require("../controllers/getTypes");
const { getId } = require("../controllers/getByID");
const express = require("express");
const router = express.Router();



router.get("/pokemon/name", getByName)
router.get("/pokemon/:id", getId)
router.get("/pokemon", getPokedex)
router.post("/pokemon", createPokemon)
router.get("/type", getTypes)

module.exports = router;
