import { SearchPokemon, getAllPokemons } from "../../redux/actions/actions"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import "./searchbar.modules.css"


const Searchbar = () => {

    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setScrolling(scrollTop > 100); 
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div>
            <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <input onChange={handleChange} type="search" value={input} placeholder="Busca Pokemones" className="form-group"/>
            <button onClick={() => dispatch(SearchPokemon(input))} className="btn-search" > Buscar </button>
            <button onClick={() => dispatch(getAllPokemons())} className="btn-search"> Reset </button>
            </nav>
        </div>
    )


}

export default Searchbar