import { CreatePokemon, GetTypes } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import validations from "./validation"
import "./form.modules.css"

const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    })

    const [errors, setErrors] = useState({})

    const [errorVisible, setErrorVisible] = useState(false);


    const setErrorsAndVisibility = (newErrors) => {
        setErrors(newErrors);
        setErrorVisible(Object.values(newErrors).some(error => error !== ''));
    }


    const handlechange = (event) => {
        const { name, value } = event.target;
        const newInput = { ...input, [name]: value };
        setInput(newInput);
        setErrorsAndVisibility(validations(newInput));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(CreatePokemon(input))
        navigate("/home")
    }

    const getTypes = useSelector((state) => state.types)
    useEffect(() => {
        dispatch(GetTypes());
    }, []);



    const handleTypeChange = (event) => {
        const selectedType = event.target.value;

        if (input.types.length === 2 && !input.types.includes(selectedType)) {
            return;
        }

        const updatedTypes = input.types.includes(selectedType)
            ? input.types.filter((type) => type !== selectedType)
            : [...input.types, selectedType];

        setInput({ ...input, types: updatedTypes });
    };

    return (
        <div>
            
            <div className="form-header"></div>
            <form onSubmit={handleSubmit} >
                <div className="container-all">
                    <div className="input-container">
                        <label htmlFor="name">Nombre: </label>
                        <input className="input-blanks" onChange={handlechange} type="name" name="name" value={input.name} />

                        <br />
                        <label htmlFor="image">Imagen URL: </label>
                        <input className="input-blanks" onChange={handlechange} type="text" name="image" value={input.image} />

                        <br />
                        <label htmlFor="hp">Puntos de vida: </label>
                        <input className="input-blanks" onChange={handlechange} type="number" name="hp" value={input.hp} />

                        <br />
                        <label htmlFor="Attack">Ataque: </label>
                        <input className="input-blanks" onChange={handlechange} type="number" name="attack" value={input.attack} />

                        <br />
                        <label htmlFor="Defense">Defensa: </label>
                        <input className="input-blanks" onChange={handlechange} type="number" name="defense" value={input.defense} />

                        <br />
                        <label htmlFor="Speed">Velocidad: </label>
                        <input className="input-blanks" onChange={handlechange} type="number" name="speed" value={input.speed} />

                        <br />
                        <label htmlFor="Height">Altura: </label>
                        <input className="input-blanks" onChange={handlechange} type="number" name="height" value={input.height} />

                        <br />
                        <label htmlFor="weight">Peso: </label>
                        <input className="input-blanks" onChange={handlechange} type="number" name="weight" value={input.weight} />
                    </div>

                    <div className="container-types">
                        <br />
                        <div>
                            <label htmlFor="types">Tipos (selecciona máximo 2):</label> <br />
                        </div>
                        <div className="types-checks">
                            {getTypes.map((type) => (
                                <div key={type.name} >
                                    <input
                                        type="checkbox"
                                        className="type-boxes"
                                        name="type"
                                        value={type.name}
                                        checked={input.types.includes(type.name)}
                                        onChange={handleTypeChange}
                                        disabled={
                                            input.types.length === 2 && !input.types.includes(type.name)
                                        }
                                    />
                                    {type.name}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className={`error-message ${Object.values(errors).some(error => error) ? 'visible' : 'hidden'}`}>
                    {errors.name} 
                    <br />
                    {errors.image} 
                    <br />
                    {errors.hp}
                    <br />
                    {errors.attack}
                    <br />
                    {errors.defense}
                    <br />
                    {errors.speed}
                    <br />
                    {errors.height}
                    <br />
                    {errors.weight}
                </div>

                <div>
                    <button 
                    className="btn-crear"
                        type="submit"
                        disabled=
                        {input.name === "" || 
                        input.image === "" || 
                        input.hp === "" || 
                        input.attack === "" || 
                        input.defense === "" || 
                        input.speed === "" ||
                        input.height === "" ||
                        input.weight === "" ||
                        input.types < 1 || 
                        errors.name || 
                        errors.image || 
                        errors.hp || 
                        errors.attack || 
                        errors.defense ||
                        errors.speed ||
                        errors.height ||
                        errors.weight}
                    >¡Crear!</button>

                </div>
            </form>
        </div>
    )
}

export default Form