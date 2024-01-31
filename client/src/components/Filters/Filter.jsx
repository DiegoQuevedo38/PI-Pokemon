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
                <option value="All_Pokemons">All Pokemons</option>
                <option value="From_API">Original Pokemons</option>
                <option value="From_DB">Created Pokemons</option>
            </select>
        </div>
    )
}

export default Filterbar