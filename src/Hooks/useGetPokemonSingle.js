import { useEffect, useState } from "react";
export const useGetPokemonSingle = (favorites) => {

    const [pokemon, setPokemon] = useState([])

    const getPokemon = async (pokemon) => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const resp = await fetch(url)
            const pokemonResponse = await resp.json()
            return pokemonResponse

        } catch (error) {
            return '404'
        }
    }
    const getFavorites = async (favorites) => {

        const PokeFav = await Promise.all(
            favorites.map(async (pokemon) => {
              return await await getPokemon(pokemon)
            })
          )
        setPokemon(PokeFav)
    }



    useEffect(() => {
        getFavorites(favorites);
    }, [favorites]);

    return {
        pokemon
    }
}
