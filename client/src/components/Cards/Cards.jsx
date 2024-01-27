import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import { useEffect } from "react";
import Pagination from "../Page/Pagination";
import Orderbar from "../OrderBar/OrderBar";
import FilterBar from "../Filters/Filter";
import FilterBarType from "../Filters/TypeFilter";
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

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <div className="header">
        <Searchbar></Searchbar>
      </div>
      <header className="header-filter">
        <p>Origen: </p>
        <FilterBar></FilterBar>
        <p>Tipo: </p>
        <FilterBarType></FilterBarType>
        <p>Orden: </p>
        <Orderbar></Orderbar>
      </header>

      <div>
        {pokedex.length > 0 
        ? <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(pokedex.length / PokesPerPage)}
          onPageChange={paginate}
          /> : null}
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
