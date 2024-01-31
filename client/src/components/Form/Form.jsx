import { CreatePokemon, GetTypes } from "../../redux/actions/actions"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import validations from "./validation"
import 'react-toastify/dist/ReactToastify.css';
import "./form.modules.css"
import React from 'react';


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

    const[focusedInput, setFocusedInput] = useState(null);
    
    
    const handlechange = (event) => {
        const { name, value } = event.target;
        setFocusedInput(name);
        const newInput = { ...input, [name]: value };
        setInput(newInput);
        setErrors(validations(newInput));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if(input.name === "" || input.image === "" || 
        input.hp === "" || input.attack === "" || 
        input.defense === "" || input.speed === "" ||
        input.height === "" ||input.weight === "" ||
        input.types < 1 || errors.name || errors.image || 
        errors.hp || errors.attack || errors.defense ||
        errors.speed || errors.height || errors.weight) {
            toast.error("Oh oh! Check your Pokemon info");
            return;
        }
        dispatch(CreatePokemon(input))
        navigate("/home")
    }

    const handleFocus = (name) => {
        setFocusedInput(name);
    }

    const handleBlur = () => {
        setFocusedInput(null)
    }

    const showErrorToast = (inputName) => {
        if (errors[inputName]) {
          toast.error(errors[inputName], {
            position: "top-left",
          });
        }
      };

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
        <ToastContainer />      
        <div className="form-header"></div>
        <form onSubmit={handleSubmit} >
            <div className="container-all">
                <div className="input-container">
                    <label htmlFor="name">Name: </label>
                    <input className={`input-blanks ${focusedInput === "name" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("name");
                        showErrorToast("name")}}
                    onBlur={handleBlur} type="name" name="name" value={input.name} />
                    
                    <label htmlFor="image">URL Image: </label>
                    <input className={`input-blanks ${focusedInput === "image" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("image");
                        showErrorToast("image")}}
                    onBlur={handleBlur} type="text" name="image" value={input.image} />
                    
                    <label htmlFor="hp">❤️ Health Points</label>
                    <input className={`input-blanks ${focusedInput === "hp" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("hp");
                        showErrorToast("hp")}}
                    onBlur={handleBlur} type="number" name="hp" value={input.hp} />
                        
                    <label htmlFor="Attack">🗡️ Attack</label>
                    <input className={`input-blanks ${focusedInput === "attack" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("attack");
                        showErrorToast("attack")}}
                    onBlur={handleBlur} type="number" name="attack" value={input.attack} />

                    <label htmlFor="Defense">🛡️ Defense</label>
                    <input className={`input-blanks ${focusedInput === "defense" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("defense");
                        showErrorToast("defense")}}
                    onBlur={handleBlur} type="number" name="defense" value={input.defense} />

                    <label htmlFor="Speed">🌀 Speed </label>
                    <input className={`input-blanks ${focusedInput === "speed" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("speed");
                        showErrorToast("speed")}}
                    onBlur={handleBlur} type="number" name="speed" value={input.speed} />

                    <label htmlFor="Height">📏 Height</label>
                    <input className={`input-blanks ${focusedInput === "height" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("height");
                        showErrorToast("height")}}
                    onBlur={handleBlur} type="number" name="height" value={input.height} />

                    <label htmlFor="weight">⚓ Weight</label>
                    <input className={`input-blanks ${focusedInput === "weight" ? "focused" : ""}`}
                    onChange={handlechange}
                    onFocus={() => {
                        handleFocus("weight");
                        showErrorToast("weight")}}
                    onBlur={handleBlur} type="number" name="weight" value={input.weight} />
                </div>

                <div className="container-types">
                    <div className="type-text">
                    <label htmlFor="types"> Types (select up to 2)</label>
                    </div>

                    <div className="types-checks"> {getTypes.map((type) => (
                        <div key={type.name} >
                            <input
                                type="checkbox" className="type-boxes"
                                name="type" value={type.name}
                                checked={input.types.includes(type.name)} onChange={handleTypeChange}
                                disabled={
                                input.types.length === 2 &&
                                !input.types.includes(type.name)}/>
                            <p>{type.name}</p>
                        </div>))}
                    </div>
                </div>
            </div>
            <div>
            <button className="btn-crear">¡Catch!</button>
            </div>
        </form>
    </div>
    )
}

export default Form