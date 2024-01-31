const validations = (input) => {
    const errors = {};

    if (input.name.length <= 1 || input.name.length >= 15) { 
        errors.name = "It's name must be between 2 to 15 characters" 
    }
    if (!(input.image.startsWith(`http://`) || input.image.startsWith(`https://`))) {
        errors.image = "Image must be an URL" }
    if (isNaN(input.hp) || input.hp <= 0 || input.hp > 225) { 
        errors.hp = "Health points must be between 1 to 225 points" }
    if (isNaN(input.attack) || input.attack <= 4 || input.attack > 105) { 
        errors.attack = "Attack power must be between 5 to 105 points" }
    if (isNaN(input.defense) || input.defense <= 4 || input.defense > 205) { 
        errors.defense = "Defense must be between 5 to 205 points" }
    if (isNaN(input.speed) || input.speed <= 30 || input.speed > 150) { 
        errors.speed = "Speed must be between 30 to 150 points" }
    if (isNaN(input.height) || input.height <= 0 || input.height > 145) { 
        errors.height = "Height must be between 1 to 145 decemeters (14.5m)" }
    if (isNaN(input.weight) || input.weight < 1 || input.weight > 3980) { 
        errors.weight = "Weight 1 to 3980 hectograms (398kg))" }
    if (input.types.length === '') { errors.types = "Debes seleccionar de 1 a 2 tipos" }

    return errors;
}

export default validations;