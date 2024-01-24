import { useLocation } from "react-router-dom"
import Button from "../Button/Button"
import "./nav.modules.css"

const Nav = () => {
    const location= useLocation()
    return(
        <div>
            <div className="btn-create">
                {location.pathname !== "/home" ? <Button path={"/home"} text= "Home" /> : ""} 
                {location.pathname === "/home" ? <Button path={"/form"} text= "Create Pokemon" /> : "" }          
            </div>
            <div className="btn-logout">
                {location.pathname !=="/landing" ? <Button path={"/"} text= "Log Out"/> : ""}
            </div>
        </div>

    )
}

export default Nav