import Image from "next/image"
import { useRouter } from "next/router"
import { useContext } from "react"
import { PokemonContext } from "../../global"
import { PokemonDetails } from "../../interfaces"
import { pokemonTypeColors } from "./styles"

interface PokemonCardProps {
    pokemonInfo: PokemonDetails
}

export default function PokemonCard({ pokemonInfo }: PokemonCardProps) {
    const { pokedex, setPokedex } = useContext(PokemonContext)
    const router = useRouter()

    const pokemonCaptured: PokemonDetails | undefined = pokedex.find(
        (pokemon) => pokemon.name === pokemonInfo.name
    )

    const addToPokedex = (pokemonInfo: PokemonDetails) => {
        setPokedex([...pokedex, pokemonInfo])
        alert("Pokémon adicionado com sucesso à sua Pokédex")
    }

    const removeFromPokedex = (pokemonInfo: PokemonDetails) => {
        setPokedex(pokedex.filter((pokemon) => pokemon.name !== pokemonInfo.name))
        alert("Pokémon removido com sucesso da sua Pokédex")
    }

    return (
        <>
            {pokemonInfo && (
                <div className="max-w[304px] flex flex-col shadow-md px-4 py-2 gap-2 cursor-pointer">
                    <div
                        className="flex flex-col"
                        onClick={() => router.push(`/pokemon/${pokemonInfo.name}`)}
                    >
                        <Image src={pokemonInfo.image} alt="Pokemon" width={200} height={200} />
                        <span className="text-zinc-500">Nº{pokemonInfo.id}</span>
                        <h3 className=" text-xl uppercase font-[500] text-zinc-600">
                            {pokemonInfo.name}
                        </h3>
                        <div className="flex justify-between">
                            {pokemonInfo.types.map((type: string) => (
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
                    {pokemonCaptured ? (
                        <button
                            onClick={() => removeFromPokedex(pokemonInfo)}
                            className="w-full py-2 rounded-md text-zinc-100 bg-red-400 hover:bg-red-500 transition-colors"
                        >
                            Remover da Pokédex
                        </button>
                    ) : (
                        <button
                            onClick={() => addToPokedex(pokemonInfo)}
                            className="w-full py-2 rounded-md text-zinc-100 bg-blue-400 hover:bg-blue-500 transition-colors"
                        >
                            Adicionar á Pokédex
                        </button>
                    )}
                </div>
            )}
        </>
    )
}
