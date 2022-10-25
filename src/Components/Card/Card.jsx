import React from "react";
import { useState, useEffect } from "react";
import { useGetPokemonSingle } from "../../Hooks/useGetPokemonSingle";
import PokeCard from "../../components/Pokecard/Pokecard.jsx";
import {
  Cards,
  ContainerScroll,
} from "./CardStyles";

const Card = ({ favorites }) => {

  
  const { pokemon, isLoading } = useGetPokemonSingle(favorites)

  //console.log(pokemonInfo)

  const mapPokemons =
  //console.log(pokeList)
    pokemon &&
    pokemon.map((pokemonInfo) => {
      return (
        <>
          <PokeCard pokemonInfo={pokemonInfo} />
        </>
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
