import React from "react";
import { useGetPokemonSingle } from "../../Hooks/useGetPokemonSingle";
import PokeCard from "../../Components/Pokecard/Pokecard.jsx";
import {
  Cards,
  ContainerScroll,
} from "./CardStyles";

const Card = ({ favorites, setFavorites }) => {


  const { pokemon } = useGetPokemonSingle(favorites)
  const mapPokemons =
    pokemon &&
    pokemon.map((pokemonInfo) => {
      return (
        <PokeCard key={pokemonInfo.name} pokemonInfo={pokemonInfo} setFavorites={setFavorites} />
      );
    });

  return (
    <>
      <ContainerScroll>
        <Cards>
          {mapPokemons}
        </Cards>
      </ContainerScroll>
    </>
  );
};

export default Card;
