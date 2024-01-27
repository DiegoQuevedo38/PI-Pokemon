import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, CleanDetail } from "../../redux/actions/actions";
import { useEffect } from "react";
import "./detail.modules.css"

function Detail() {
  const params = useParams()
  const dispatch = useDispatch()
  const pokeDetail = useSelector(state => state.detail)

  useEffect(() => {
    dispatch(getDetail(params?.id))
    return () => dispatch(CleanDetail())
  }, [params?.id])


  return (
    <div>
      <div className="detail-header"></div>
          <div className="minicontainer">
            <h2 className="name">{pokeDetail?.name} </h2>
            <p className="type">Tipo: {pokeDetail?.types} </p>
          </div>

      <div className="detail-fondo">
        <div className="card-detail">

          <div className="minicontainer2">
            <div className="imagecontainer">
              <img className="img-pokemon" src={pokeDetail?.image} alt={pokeDetail?.name} />
            </div>

            <div className="characteristics">
              <p>Id: {pokeDetail?.id} </p>
              <p>Vida: {pokeDetail?.hp} </p>
              <p>Ataque: {pokeDetail?.attack} </p>
              <p>Defensa: {pokeDetail?.defense} </p>
              <p>Velocidad: {pokeDetail?.speed} </p>
              <p>Altura: {pokeDetail?.height}dm </p>
              <p>Peso: {pokeDetail?.Weight}hg </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;