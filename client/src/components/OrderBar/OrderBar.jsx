import { useDispatch } from "react-redux"
import { OrderPokemon } from "../../redux/actions/actions"
import "./OrderBar.modules.css"

const Orderbar = ()=>{
    const dispatch = useDispatch()
    
    const handleChange = (event) => {
        const valorSeleccionado = event.target.value; 
        dispatch(OrderPokemon(valorSeleccionado)); 
      };

    return (
        <div>
            <select onChange={handleChange}>
                <option value="No_Order">Pokédex</option>
                <option value="Ascendente_Alfa">↑A-z</option>
                <option value="Descendente_Alfa">↓Z-a</option>
                <option value="Ascendente_Attack">↑Attack</option>
                <option value="Descendente_Attack" >↓Attack</option>
            </select>
        </div>
    )
}

export default Orderbar