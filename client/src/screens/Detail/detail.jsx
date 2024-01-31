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

  const calculateBarWidth = (value, min, max) => {
    const clampedValue = Math.min(Math.max(value, min), max); 
    const percentage = ((clampedValue - min) / (max - min)) * 100; 
    return `${percentage}%`;
  };

  return (
  <div className="detail-module">
    <div className="detail-header"></div>

    <div className="pokemon-detail-container">
        <div className="characteristics">

          <p className="stat-text">HP ❤️</p>
              <p className="stat-value">{pokeDetail?.hp} / 225</p>
          <div className="stat-Container">
            <div className="stat-background">
            <div className="stat-bar" data-stat="hp" style={{ width: calculateBarWidth(pokeDetail?.hp, 1, 225), }}></div>
            </div>
          </div>

          <p className="stat-text">Attack 🗡️</p>
            <p className="stat-value">{pokeDetail?.attack} / 105</p>
          <div className="stat-Container">
            <div className="stat-background">
            <div className="stat-bar" data-stat="atk" style={{ width: calculateBarWidth(pokeDetail?.attack, 5, 105), }}></div>
            </div>
          </div>

          <p className="stat-text">Defense 🛡️</p>
            <p className="stat-value">{pokeDetail?.defense} / 205</p>
          <div className="stat-Container">
            <div className="stat-background">
            <div className="stat-bar" data-stat="def" style={{ width: calculateBarWidth(pokeDetail?.defense, 5, 205), }}></div>
            </div>
          </div>

          <p className="stat-text">Speed 🌀 </p>
            <p className="stat-value">{pokeDetail?.speed} / 150</p>
          <div className="stat-Container">
            <div className="stat-background">
            <div className="stat-bar" data-stat="speed" style={{ width: calculateBarWidth(pokeDetail?.speed, 5, 150), }}></div>
            </div>
          </div>

          <div className="h-w-Container">
            <div className="height-data">
              <p className="data-img">📏</p>
              <p className="text">Height</p>
              <p className="data">{pokeDetail?.height}</p>
            </div>
            <div className="weight-data">
              <p className="data-img">⚓</p>
              <p className="text">Weight</p>
              <p className="data">{pokeDetail?.weight} </p>
            </div>
          </div>
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

