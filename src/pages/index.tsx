import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { useState } from "react"
import Header from "../components/Header"
import PokemonsList from "../components/PokemonsList"
import { api } from "../services/api"
import { PokemonDetails, PokemonResult, Stats } from "../types"

export default function Home({ pokemons }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [pokemonsList, setPokemonsList] = useState<PokemonDetails[]>(pokemons)
    
    return (
        <>
            <Head>
                <title>Pokédex - Home</title>
                <meta name="description" content="Pokédex - Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center">
                <Header />
                <PokemonsList pokemons={pokemonsList}/>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const pokemonsResult: PokemonResult[] = await api
        .get(`/pokemon?limit=20&offset=0`)
        .then(({ data }) => data.results)

    const pokeNames: string[] = pokemonsResult.map((pokemon) => pokemon.name)

    const pokemonDetails = pokeNames.map(
        async (pokemon) => await api.get(`/pokemon/${pokemon}`).then(({ data }) => data)
    )

    const response = await Promise.all(pokemonDetails)

    const pokemons: PokemonDetails[] = response.map((pokemon) => {
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other["official-artwork"].front_default,
            types: pokemon.types.map((type: { [key: string]: { name: string } }) => type.type.name),
            abilities: pokemon.abilities.map(
                (ability: { [key: string]: { name: string } }) => ability.ability.name
            ),
            height: pokemon.height,
            weight: pokemon.weight,
            stats: pokemon.stats.map((stat: { [key: string]: Stats }) => {
                return {
                    name: stat.stat.name,
                    value: stat.base_stat,
                }
            }),
        }
    })

    return {
        props: {
            pokemons,
        },
    }
}
