import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import { useEffect } from "react";
import Searchbar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import "./cards.modules.css"



const Cards = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const pokedex = useSelector((state) => state.pokedex);

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);

  useEffect(() => {
    setCurrentPage(1)
  }, [pokedex]);

  const PokesPerPage = 12;

  const indexOfLastPokes = currentPage * PokesPerPage;
  const indexOfFirstPokes = indexOfLastPokes - PokesPerPage;
  const currentPokes = pokedex ? pokedex.slice(indexOfFirstPokes, indexOfLastPokes) : [];


  return (
    <div>
      <div className="header">
        <Searchbar></Searchbar>
      </div>

      <div className="cartas">
        <main className="card-list">
          {currentPokes?.map((pokemon) => (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
            />))}
        </main>
      </div>
    </div>
  );
};

export default Cards;
