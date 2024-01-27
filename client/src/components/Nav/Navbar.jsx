import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Button from "../Button/Button"
import "./nav.modules.css"

const Nav = () => {
    const location= useLocation()
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setScrolling(scrollTop > 20); 
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div>
            <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
            <div className="btn-create">
                {location.pathname !== "/home" ? <Button path={"/home"} text= "Home" /> : ""} 
                {location.pathname === "/home" ? <Button path={"/form"} text= "Create Pokemon" /> : "" }          
            </div>
            <div className="btn-logout">
                {location.pathname !=="/landing" ? <Button path={"/"} text= "Log Out"/> : ""}
            </div>
            </nav>
        </div>

    )
}

export default Nav