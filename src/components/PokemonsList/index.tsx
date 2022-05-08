import { useContext, useEffect } from "react"
import { PokemonContext } from "../../global"
import PokemonCard from "../PokemonCard"

export default function PokemonsList() {
    const { pokemons } = useContext(PokemonContext)

    return (
        <div className=" container max-w-7xl p-4 flex items-center justify-center gap-4 flex-wrap">
            {pokemons?.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemonInfo={pokemon} />
            ))}
        </div>
    )
}
