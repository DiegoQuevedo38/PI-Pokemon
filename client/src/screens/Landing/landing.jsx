import Button from "../../components/Button/Button"
import "./landing.modules.css"


const Landing = () => {
    return (
        <div className="container-landing">
            {/* <video autoplay loop muted>
                <source src="" type="video/mp4"/>
            </video> */}
            <div className="bienvenida">
                <h1>
                    ¡Bienvenido a mi app de Pokémon!
                </h1>
                <Button
                    class="home-btn"
                    path={"/home"}
                    text="Home"
                />
                <button class="sound-btn">🔊</button>
            </div>

        </div>
    )
}

export default Landing