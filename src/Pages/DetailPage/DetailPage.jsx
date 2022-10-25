import React from "react";
import {
    ContainerTela,
    Container,
    ImagemPokemon,
    Titulo,
    SegundoCardDetalhe,
    ContainerDetalhe,
    PrimeiroCardDetalhe,
    Voltar,
    BarraDeProgresso,
    SmallButtons2,
    Input,
} from "./PokeStyles";
import error from "../../assets/404.png"
import loaderball from "../../assets/pokeball.gif"
import { useGetPokemon } from "../../Hooks/useGetPokemon";


const DetailPage = ({ pokemonName, setSearchValue, toSearch, setFavorites, favorites }) => {
    const { pokemon, isLoading } = useGetPokemon(pokemonName, toSearch)

    const setFavoritePoke = (pokeName) => {
        let message = 'Pokemon existente en favoritos';
        if (!favorites.includes(pokeName)) {
            setFavorites(current => [...current, pokeName])
            message = 'Pokemon agregado a favoritos'
        }
        alertify.confirm(message, function(){}).autoOk(2).set('frameless', true); 

    }

    let Total = 0

    const statuLista = pokemon && pokemon.stats?.map((item) => Total = item.base_stat + Total)

    return (
        <div>
            <ContainerTela>
                <SmallButtons2>
                    <button></button>
                    <button></button>
                </SmallButtons2>
                <Container>
                    {
                        !isLoading ?
                            <ImagemPokemon>
                                <ContainerDetalhe>
                                    <PrimeiroCardDetalhe>
                                        <h2> #{pokemon.id} </h2>
                                        <h1> Altura : {pokemon?.height} cm</h1>
                                        <h1> Peso : {pokemon?.weight} kg</h1>
                                        {pokemon.abilities?.map((item, index) => <h1> Habilidad N°{index + 1} : {item.ability.name} </h1>)}
                                        {pokemon.types?.map((item) => <h1> Atributo : {item.type.name}</h1>)}
                                        {pokemon.forms?.map((item) => <h1> Formas : {item.name}</h1>)}
                                    </PrimeiroCardDetalhe>
                                    <Titulo>
                                        <Input
                                            type="text"
                                            value={pokemonName}
                                            onChange={(e) => { setSearchValue(e.target.value) }}
                                        />
                                        <img
                                            srcSet={pokemon.sprites ? pokemon?.sprites?.other?.home?.front_default : error}
                                            alt={pokemon?.name}
                                        />
                                    </Titulo>
                                    <SegundoCardDetalhe>
                                        <h2> STATUS </h2>
                                        {pokemon.stats?.map((item) => <h1> {item.stat.name} : {item.base_stat} <BarraDeProgresso inputWidth={(item.base_stat + 30).toString() + 'px'}  ></BarraDeProgresso></h1>)}
                                        <h1> Total = {Total} </h1>
                                    </SegundoCardDetalhe>
                                </ContainerDetalhe>
                            </ImagemPokemon>
                            :
                            <img src={loaderball} alt="" srcSet="" />
                    }

                </Container>
            </ContainerTela>
            <Voltar onClick={() => { setFavoritePoke(pokemon.name) }}></Voltar>
        </div>
    );
};

export default DetailPage;