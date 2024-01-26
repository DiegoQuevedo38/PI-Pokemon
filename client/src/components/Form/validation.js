const validations = (input) => {
    const errors = {};

    if (input.name.length <= 1 || input.name.length >= 15) { 
        errors.name = "Tu Pokemón debe tener un nombre de entre 1 a 15 carácteres" 
    }
    if (!(input.image.startsWith(`http://`) || input.image.startsWith(`https://`))) {
        errors.image = "La imagen debe ser un URL" }
    if (isNaN(input.hp) || input.hp <= 0 || input.hp > 255) { 
        errors.hp = "Su salud debe estar entre 1 y 255 puntos" }
    if (isNaN(input.attack) || input.attack <= 4 || input.attack > 210) { 
        errors.attack = "Su ataque debe estar entre 5 y 210 puntos" }
    if (isNaN(input.defense) || input.defense <= 4 || input.defense > 230) { 
        errors.defense = "Su defensa debe estar entre 5 y 230 puntos" }
    if (isNaN(input.speed) || input.speed <= 0 || input.speed > 255) { 
        errors.hp = "Su velocidad debe estar entre 1 y 255 puntos" }
    if (isNaN(input.height) || input.height <= 0 || input.height > 145) { 
        errors.hp = "Su altura debe estar entre 1 y 145 decímetros (14.5m)" }
    if (isNaN(input.weight) || input.weight <= 0 || input.weight > 3980) { 
        errors.hp = "Su peso debe estar entre 1 y 3980 hectogramos (398kg))" }
    if (input.types.length === '') { errors.types = "Debes seleccionar de 1 a 2 tipos" }

    return errors;
}

export default validations;