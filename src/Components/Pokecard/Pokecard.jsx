import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import pokebola from "../../assets/pokebola.png"
import {
  CardContainer,
  CardFather,
  Imagem,
  CaptureButton,
  Stats,
} from "./PokeStyles";
import styled from "styled-components";

const Title = styled.div`
    display: flex;
    margin-top: 5px;
`


const PokeCard = ({ pokemonInfo }) => {
  // const [pokemonInfo, setPokemon] = useState([]);
  const [pokedexCart, setPokedexCart] = useState()



  return (
    <CardContainer>
      <CardFather>
        <div onClick={() => IdPokemon()}>
          <Title>
            <h3 >{pokemonInfo.name && <>{pokemonInfo.name}</>} </h3><h5>#{pokemonInfo.id}</h5>
          </Title>

          <Stats>
            <p>{pokemonInfo.types && <>{pokemonInfo.types[0].type.name}</>}</p>
            <p>{pokemonInfo.types && (pokemonInfo.types.length > 1 ? <>|{pokemonInfo.types[1].type.name}</> : "")}</p>
          </Stats>
          <Imagem>
            {pokemonInfo.sprites && (
              <img src={pokemonInfo.sprites.other.home.front_default} alt={pokemonInfo.name} />
            )}
          </Imagem>
        </div>
        <CaptureButton>
          <img src={pokebola} />
        </CaptureButton>
      </CardFather>
    </CardContainer>
  );
};

export default PokeCard;