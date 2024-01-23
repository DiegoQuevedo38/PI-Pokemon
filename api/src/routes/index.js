const { createPokemon } = require("../controllers/postPokemon");
const { getPokedex } = require("../controllers/getPokedex");
const { getByName } = require("../controllers/getByName");
const { getTypes } = require("../controllers/getTypes");
const { getId } = require("../controllers/getID");
const express = require("express");
const router = express.Router();



router.get("/pokemon", getPokedex)
router.get("/pokemon/:id", getId)
router.get("/pokemon/name?=", getByName)
router.post("/pokemon", createPokemon)
router.get("/type", getTypes)

module.exports = router;
