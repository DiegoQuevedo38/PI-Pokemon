import { SearchPokemon, getAllPokemons } from "../../redux/actions/actions"
import { useState } from "react"
import { useDispatch } from "react-redux"
import "./searchbar.modules.css"


const Searchbar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <input onChange={handleChange} type="search" value={input} placeholder="Search Pokemons" className="form-group"/>
            <button onClick={() => dispatch(SearchPokemon(input))} className="btn-search" > Search </button>
            <button onClick={() => dispatch(getAllPokemons())} className="btn-search"> Reset </button>
        </div>
    )


}

export default Searchbar