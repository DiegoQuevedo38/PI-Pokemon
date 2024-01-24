import { Link } from "react-router-dom"
import "./card.modules.css"

const Card = ({ id, name, image, types }) => {
    return (
        <div className={"card-container"}>
            <h2>{name}</h2>
            <Link to={`/detail/${id}`} >
                <img src={image} alt={name} />
            </Link>
            <p >{types}</p>

        </div>
    );
  };

export default Card