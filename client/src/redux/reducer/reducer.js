import { useState } from "react";
import { GET_POKEDEX, GET_DETAIL, CLEAN_DETAIL, SEARCH_POKEMON,
        ORDER_POKEMON, FILTER_POKEMON, FILTER_TYPE_POKEMON, GET_TYPES } from "../actions"; 

const initialState = {
    pokedex: [],
    detail: {},
    pokedexCopy: [],
    types: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEDEX:
            return {
                ...state,
                pokedex: action.payload,
                pokedexCopy: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                detail: {}
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                pokedex: action.payload
            }
        case ORDER_POKEMON:
            let backUpOrder = [...state.pokedex]
            let orderedPokemons = []

            if (action.payload === "Ascendente_Alfa"){
                orderedPokemons = backUpOrder.sort((a, b) =>
                a.name.localeCompare(b.name))
            }
            if (action.payload === "Descendente_Alfa"){
                orderedPokemons = backUpOrder.sort((a, b) =>
                b.name.localeCompare(a.name))
            }
            if (action.payload === "Ascendente_Attack"){
                orderedPokemons = backUpOrder.sort((a, b) => {
                    return (a.attack - b.attack)
                })
            }
            if (action.payload === "Descendente_Attack"){
                orderedPokemons = backUpOrder.sort((a, b) => {
                    return (b.attack - a.attack)
                })
            }
            if (action.payload === "No_Order") {
                orderedPokemons = [...state.pokedexCopy]
            }
            return {
                ...state,
                pokedex: orderedPokemons
            }
        case FILTER_POKEMON:

            let backUpFilter = [...state.pokedexCopy]
            let filteredPokemons = []

            if (action.payload === "All_Pokemons") {
                filteredPokemons = backUpFilter
            }
            else if (action.payload === "From_API"){
                filteredPokemons = backUpFilter.filter((pokemon) => !isNaN(pokemon.id))
            }
            else if (action.payload === "From_DB"){
                filteredPokemons = backUpFilter.filter((pokemon) => isNaN(pokemon.id))
            }
            return {
                ...state,
                pokedex: filteredPokemons
            }
        case FILTER_TYPE_POKEMON:
            
            if(action.payload === "All"){
                return {
                    ...state,
                    pokedex: [...state.pokedexCopy]
                }
            }

            let filteredtype = [...state.pokedexCopy].filter((pokemon)=> {
                if (pokemon.types.includes(action.payload)) {
                    return pokemon
                }
            })
            return {
                ...state,
                pokedex: filteredtype
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;