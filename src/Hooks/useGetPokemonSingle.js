import { useEffect, useState } from "react";
export const useGetPokemonSingle = (favorites) => {

    const [isLoading, setIsLoading] = useState(false)
    const [pokemon, setPokemon] = useState([])
    const [pokemonInfo, setPokemonInfo] = useState({})
    const [pokeCounterFav, setPokeCounterFav] = useState(0)

    const getPokemon = async (pokemon) => {
        setIsLoading(true)
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const resp = await fetch(url)
            const pokemonResponse = await resp.json()
            setIsLoading(false)
            return pokemonResponse

        } catch (error) {
            setIsLoading(false)
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
        isLoading,
        pokemon
    }
}
