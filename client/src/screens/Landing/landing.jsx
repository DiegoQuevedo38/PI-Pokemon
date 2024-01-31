import Button from "../../components/Button/Button"
import "./landing.modules.css"


const Landing = () => {
    return (
        <div className="container-landing">
            <div className="land">
                <h1>
                    ¡Bienvenido a mi app de Pokémon!
                </h1>
                <br/>
            </div>
            <Button
                    className="home-btn"
                    path={"/home"}
                    text="Home"
                />
        </div>
    )
}

export default Landing