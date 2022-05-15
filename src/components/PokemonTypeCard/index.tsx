import { PokemonDetails } from "../../interfaces"
import { pokemonTypeColors } from "../PokemonCard/styles"

interface PokemonTypeCardProps {
    pokemon: PokemonDetails
}

export default function PokemonTypeCard({pokemon} : PokemonTypeCardProps) {
    return (
        <div className="flex flex-col gap-8 items-center w-full">
            <h1 className="text-2xl text-zinc-600">Type</h1>
            <div className="flex w-1/2 justify-around">
                {pokemon.types.map((type: string) => (
                    <span
                        key={type}
                        className="w-24 rounded-md text-center text-white "
                        style={{
                            backgroundColor: pokemonTypeColors[type].color,
                        }}
                    >
                        {type}
                    </span>
                ))}
            </div>
        </div>
    )
}
