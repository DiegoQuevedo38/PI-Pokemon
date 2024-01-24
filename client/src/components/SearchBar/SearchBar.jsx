import { SearchPokemon, getAllPokemons } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import "./searchbar.modules.css"


const Searchbar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    

    const handlechange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <input onChange={handlechange} type="search" value={input} placeholder="Search Pokemon" className="form-group"/>
            <button onClick={() => dispatch(SearchPokemon(input))} className="btn-search" > Search </button>
            <button onClick={() => dispatch(getAllPokemons())} className="btn-search"> Reset </button>

        </div>
    )


}

export default Searchbar