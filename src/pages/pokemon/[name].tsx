import { GetServerSideProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/Layout"
import PokemonAbilitiesCard from "../../components/PokemonAbilitiesCard"
import { pokemonTypeColors } from "../../components/PokemonCard/styles"
import PokemonDetailsCard from "../../components/PokemonDetailsCard"
import PokemonDetailsSection from "../../components/PokemonDetailsSection"
import PokemonStatsCard from "../../components/PokemonStatsCard"
import PokemonStatsSection from "../../components/PokemonStatsSection"
import PokemonTypeCard from "../../components/PokemonTypeCard"
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
                        Go Back
                    </button>
                    <PokemonDetailsSection pokemon={pokemon} />
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
