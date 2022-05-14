import { PokemonDetails } from "../../interfaces"
import PokemonCard from "../PokemonCard"

interface PokemonListProps {
    pokemons?: PokemonDetails[]
    pokedex?: PokemonDetails[]
}

export default function PokemonsList({ pokemons}: PokemonListProps) {
    return (
        <>
            <div className=" container max-w-7xl p-4 flex items-center  gap-4 flex-wrap">
                {pokemons?.map((pokemon) => (
                    <PokemonCard key={pokemon.name} pokemonInfo={pokemon} />
                ))}
            </div>
        </>
    )
}
