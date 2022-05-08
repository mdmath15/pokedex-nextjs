import { GetServerSideProps, PreviewData } from "next"
import Image from "next/image"
import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { getPokemonsDetails } from "../../services/getPokemonsDetails"
import { PokemonDetails, PokemonResult, Stats } from "../../types/"
import { pokemonTypeColors } from "./styles"

interface PokemonCardProps {
    pokemonInfo: PokemonResult
}

export default function PokemonCard({ pokemonInfo }: PokemonCardProps) {
    const [pokemon, setPokemon] = useState<PokemonDetails | null>(null)

    useEffect(() => {
        getPokemonsDetails(pokemonInfo, setPokemon)
    }, [pokemonInfo])

    return (
        <>
            {pokemon && (
                <div className="max-w[304px] flex flex-col shadow-md px-4 py-2 gap-2">
                    <Image src={pokemon.image} alt="Pokemon" width={200} height={200} />
                    <span className="text-zinc-500">Nº{pokemon.id}</span>
                    <h3 className=" text-xl capitalize">{pokemon.name}</h3>
                    <div className="flex justify-between">
                        {pokemon.types.map((type: string) => (
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
