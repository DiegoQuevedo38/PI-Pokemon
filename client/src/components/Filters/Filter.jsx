import { FilterPokemon } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"

const Filterbar = ()=>{
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        const selected = event.target.value; 
        dispatch(FilterPokemon(selected)); 
      };

    return (
        <div>
            <select onChange={handleChange}>
                <option value="AllPokemons">All Pokemons</option>
                <option value="PokesFromApi">Original Pokemons</option>
                <option value="PokesFromBD">Created Pokemons</option>
            </select>
        </div>
    )
}

export default Filterbar