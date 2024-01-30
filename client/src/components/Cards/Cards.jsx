import { useSelector, useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";
import { useEffect, useState } from "react";
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

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          setScrolling(scrollTop > 90); 
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
  <div>
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="header">
        <Searchbar></Searchbar>
      </div>
      <header className="header-filter">
        <p>Origin:</p>
        <FilterBar></FilterBar>
        <p>Type:</p>
        <FilterBarType></FilterBarType>
        <p>Order:</p>
        <Orderbar></Orderbar>
      </header>
      <br/>
      <div className="pages">
        {pokedex.length > 0 
        ? <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(pokedex.length / PokesPerPage)}
          onPageChange={paginate}
          /> : null}
      </div>
      <div className={`blur-Scroll ${scrolling ? 'scrolling' : ''}`}>
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
    </nav>
  </div>
  );
};

export default Cards;
