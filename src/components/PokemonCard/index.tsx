import Image from "next/image"
import { PokemonDetails } from "../../interfaces"
import { pokemonTypeColors } from "./styles"

interface PokemonCardProps {
    pokemonInfo: PokemonDetails
}

export default function PokemonCard({ pokemonInfo }: PokemonCardProps) {
    return (
        <>
            {pokemonInfo && (
                <div className="max-w[304px] flex flex-col shadow-md px-4 py-2 gap-2">
                    <Image src={pokemonInfo.image} alt="Pokemon" width={200} height={200} />
                    <span className="text-zinc-500">Nº{pokemonInfo.id}</span>
                    <h3 className=" text-xl capitalize">{pokemonInfo.name}</h3>
                    <div className="flex justify-between">
                        {pokemonInfo.types.map((type: string) => (
                            <span
                                key={type}
                                className="w-24 rounded-md text-center text-zinc-100 "
                                style={{
                                    backgroundColor: pokemonTypeColors[type].color,
                                }}
                            >
                                {type}
                            </span>
                        ))}
                    </div>
                    <button className="w-full py-2 rounded-md text-zinc-100 bg-blue-400">
                        Adicionar á Pokédex
                    </button>
                </div>
            )}
        </>
    )
}
