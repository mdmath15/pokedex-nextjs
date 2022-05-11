import Head from "next/head"
import Header from "../../components/Header"
import PokemonsList from "../../components/PokemonsList"
import { useContext } from "react"
import { PokemonContext } from "../../global"


export default function Pokedex() {
    const {pokedex} = useContext(PokemonContext)
    
    return (
        <>
            <Head>
                <title>Pokédex - Minha Pokédex</title>
                <meta name="description" content="Pokédex - Minha Pokédex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center">
                <Header />
                <PokemonsList  pokedex={pokedex} />
            </main>
        </>
    )
}

