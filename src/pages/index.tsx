import Head from "next/head"
import Header from "../components/Header"
import PokemonsList from "../components/PokemonsList"

export default function Home() {
    return (
        <>
            <Head>
                <title>Pokédex - Home</title>
                <meta name="description" content="Pokédex - Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center">
               <Header/>
               <PokemonsList/>
               
            </main>
        </>
    )
}
