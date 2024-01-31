import { SearchPokemon, getAllPokemons } from "../../redux/actions/actions"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "./searchbar.modules.css"


const Searchbar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    useEffect(() => {
        const realTimeSearch = setTimeout(() => {
            if(input !== "") {
                dispatch(SearchPokemon(input))
            } else {
                dispatch(getAllPokemons())
            }
        }, 10);

        return () => clearTimeout(realTimeSearch);
    }, [input, dispatch])

    return (
        <div>
            <input onChange={handleChange} type="search" value={input} placeholder="Search Pokemons" className="form-group"/>
            <button onClick={() => dispatch(SearchPokemon(input))} className="btn-search" > Search </button>
            <button onClick={() => dispatch(getAllPokemons())} className="btn-search"> Reset </button>
        </div>
    )


}

export default Searchbar