import { useEffect, useState } from "react";
export const useGetPokemon = (pokemonName, toSearch) => {

    const [isLoading, setIsLoading] = useState(false)
    const [pokemon, setPokemon] = useState({})
    const [pokemonInfo, setPokemonInfo] = useState({})

    const getPokemon = async () => {
        setIsLoading(true)
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
            const resp = await fetch(url)
            const pokemonResponse = await resp.json()
            setPokemon(pokemonResponse)

            const urlinfo = `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;
            const respinfo = await fetch(urlinfo)
            const pokemonResponseinfo = await respinfo.json()
            const data = pokemonResponseinfo.flavor_text_entries.filter(entry => entry.language.name == 'es')
            const info = data[Math.floor(Math.random() * data.length)].flavor_text
            setPokemonInfo(info)
            console.log(info)

            if ('speechSynthesis' in window) {
                window.speechSynthesis.speak(
                    new SpeechSynthesisUtterance(info)
                )
            }
        } catch (error) {
            setPokemon({})
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getPokemon();
    }, [toSearch]);

    return {
        isLoading,
        pokemon
    }
}
