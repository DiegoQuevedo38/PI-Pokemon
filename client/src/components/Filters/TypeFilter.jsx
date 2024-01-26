import { FilterTypePokemon, GetTypes } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function FilterBarType() {

    const dispatch = useDispatch();
    const getTypes = useSelector((state)=> state.types);

    const handleTypeFilterChange = (event) => {
        const selectedType = event.target.value;
        dispatch(FilterTypePokemon(selectedType))
    }

    useEffect(()=>{
        dispatch(GetTypes())
    }, [])

    return (
        <div>
            <select onChange={handleTypeFilterChange}>
                <option value="All">All types</option>
                {getTypes?.map((type) => {
                    return (
                        <option key={type.name} value={type.name}>{type.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default FilterBarType




