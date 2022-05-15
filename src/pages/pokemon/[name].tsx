import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/Layout"
import { pokemonTypeColors } from "../../components/PokemonCard/styles"
import {
    Ability,
    BaseStatus,
    PokemonDetails,
    PokemonDetailsResponse,
    Stat,
    Type,
} from "../../interfaces"
import { api } from "../../services/api"

interface PokemonProps {
    pokemon: PokemonDetails
}

export default function Pokemon({ pokemon }: PokemonProps) {
    const router = useRouter()
    return (
        <>
            <Layout title={pokemon.name.toUpperCase()}>
                <section className="py-8 w-full max-w-5xl flex flex-col gap-2">
                    <button
                        className="text-red-500 self-start font-semibold transform hover:-translate-y-1 transition-transform ease-in duration-150 block"
                        onClick={() => router.back()}
                    >
                        Voltar
                    </button>

                    <div className="flex shadow-md w-full h-[744px] justify-center rounded-md relative">
                        <div
                            className="w-1/2 flex flex-col justify-between items-start rounded-tl-md rounded-bl-md"
                            style={{
                                backgroundColor: pokemonTypeColors[pokemon.types[0]].color,
                            }}
                        >
                            <div className="px-6 pt-4">
                                <span className="text-white text-base">#{pokemon.id}</span>
                                <h1 className="text-4xl text-white py-4">
                                    {pokemon.name.toUpperCase()}
                                </h1>
                            </div>
                            <div className="self-center absolute bottom-52">
                                <Image src={pokemon.image} alt="Pokemon" width={320} height={320} />
                            </div>
                            <div className="self-center flex gap-12 absolute bottom-24">
                                <p className="text-2xl text-white">
                                    Heigth <span className="px-2">{pokemon.height / 10} m</span>
                                </p>
                                <p className="text-2xl text-white">
                                    Weight <span className="px-2">{pokemon.weight / 10} kg</span>
                                </p>
                            </div>
                        </div>

                        <div className="w-1/2 flex flex-col justify-around items-center rounded-tr-md rounded-br-md">
                            
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
                            
                            <div className="flex flex-col gap-8 items-center w-full">
                                <h1 className="text-2xl text-zinc-600">Stats</h1>
                                <div className="w-1/2 flex flex-col gap-2">
                                    {pokemon.stats.map((stat: BaseStatus) => {
                                        return (
                                            <p
                                                key={stat.name}
                                                className="font-bold text-zinc-600 flex justify-between"
                                            >
                                                {stat.name.toUpperCase()}
                                                <span className="font-medium text-blue-600">
                                                    {stat.value}
                                                </span>
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="flex flex-col gap-8 items-center w-full">
                                <h1 className="text-2xl text-zinc-600">Abilities</h1>
                                <div className="w-1/2 flex flex-col gap-2">
                                    {pokemon.abilities.map((ability: string) => {
                                        return (
                                            <p
                                                key={ability}
                                                className="font-bold text-blue-600 flex justify-between"
                                            >
                                                {ability.toUpperCase()}
                                            </p>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const name = query.name as string

    const pokemonResponse: PokemonDetailsResponse = await api
        .get(`/pokemon/${name}`)
        .then((res) => res.data)
        .catch((err) => console.log(err.response))

    const pokemonDetails: PokemonDetails = {
        id: pokemonResponse.id,
        name: pokemonResponse.name,
        image: pokemonResponse.sprites.other["official-artwork"].front_default,
        types: pokemonResponse.types.map((type: Type) => type.type.name),
        abilities: pokemonResponse.abilities.map((ability: Ability) => ability.ability.name),
        height: pokemonResponse.height,
        weight: pokemonResponse.weight,
        stats: pokemonResponse.stats.map((stat: Stat) => {
            return {
                name: stat.stat.name,
                value: stat.base_stat,
            }
        }),
    }

    return {
        props: {
            pokemon: pokemonDetails,
        },
    }
}
