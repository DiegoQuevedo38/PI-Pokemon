import { Link } from "react-router-dom"
import "./button.modules.css"

const Button = ({path, text})=>{
    return(
        <Link to = {path}>
            <button className="btn-general">
                {text}
            </button>
        </Link>
    )
}

export default Button