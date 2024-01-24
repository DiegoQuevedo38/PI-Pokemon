import Button from "../../components/Button/Button"
import "./landing.modules.css"


const Landing = () => {
    return (
        <div className="container-landing">
            <div className="banner"/>
            <div className="bienvenida">
                <h1>
                    Bienvenido a la app de Pokémon!
                </h1>
                <Button
                    path={"/home"}
                    text="Home"
                />
            </div>

        </div>
    )
}

export default Landing