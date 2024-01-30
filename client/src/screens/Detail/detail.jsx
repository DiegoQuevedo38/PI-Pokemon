import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, CleanDetail } from "../../redux/actions/actions";
import {useEffect} from "react";
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
  <div className="detail-module">
    <div className="detail-header"></div>

    <div className="pokemon-detail-container">
        <div className="characteristics">
            <p>HP: {pokeDetail?.hp} </p>
            <p>Attack: {pokeDetail?.attack} </p>
            <p>Defense: {pokeDetail?.defense} </p>
            <p>Speed: {pokeDetail?.speed} </p>
            <p>Height: {pokeDetail?.height} dm </p>
            <p>Weight: {pokeDetail?.weight} hg </p>
        </div>

      <div className="containerName">
        <img className="img-pokemon" src={pokeDetail?.image} alt={pokeDetail?.name} />
        <h2 className="name">{pokeDetail?.name} </h2>
        <p className="type">Type: {pokeDetail?.types} </p>
      </div>
    </div>
</div>
  );
}

export default Detail;

