import { GetServerSideProps, InferGetServerSidePropsType } from "next"
import Head from "next/head"
import Header from "../components/Header"
import PokemonsList from "../components/PokemonsList"
import { api } from "../services/api"
import { getPokemonsDetails } from "../services/getPokemonsDetails"
import {
    PokemonDetails,
    PokemonDetailsResponse,
    PokemonResponse,
    PokemonResult,
} from "../interfaces"
import { Pagination } from "@nextui-org/react"
import { useRouter } from "next/router"
import { Spinner } from "phosphor-react"



export default function Home({
    pokemons,
    page
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter()
    
    return (
        <>
            <Head>
                <title>Pokédex - Home</title>
                <meta name="description" content="Pokédex - Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center">
                <Header />
                <PokemonsList pokemons={pokemons} />
                <Pagination
                className="my-4"
                    total={20}
                    initialPage={1}
                    onChange={(page: number) => {
                        router.push(`/?page=${page}`, undefined, { scroll: false })
                    }}
                />
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const page = query.page ? parseInt(query.page as string) : 1

    const pokemonResponse: PokemonResponse = await api
        .get(`/pokemon?offset=${(page - 1) * 20}&limit=20`)
        .then((res) => res.data)
        .catch((err) => console.log(err.response))

    const pokemonNames: string[] = pokemonResponse.results.map(
        (pokemon: PokemonResult) => pokemon.name
    )

    const pokemonDetailsResponse = pokemonNames.map(
        async (pokemon: string) => await api.get(`/pokemon/${pokemon}`).then((res) => res.data)
    )

    const pokemonDetailsResult: PokemonDetailsResponse[] = await Promise.all(pokemonDetailsResponse)
    
    const pokemons: PokemonDetails[] = getPokemonsDetails(pokemonDetailsResult)

    return {
        props: {
            pokemons,
            page,
        },
    }
}
