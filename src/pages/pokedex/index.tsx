import Head from "next/head"
import Header from "../../components/Header"
import PokemonsList from "../../components/PokemonsList"
import { useContext } from "react"
import { PokemonContext } from "../../global"
import pokeballImageUrl from "../../../public/pokeball.svg"
import Image from "next/image"

export default function Pokedex() {
    const { pokedex } = useContext(PokemonContext)

    return (
        <>
            <Head>
                <title>Pokédex - Minha Pokédex</title>
                <meta name="description" content="Pokédex - Minha Pokédex" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center">
                <Header />
                {pokedex.length ? (
                    <PokemonsList pokemons={pokedex} />
                ) : (
                    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-112px)]">
                        <Image
                            src={pokeballImageUrl}
                            alt="Imagem de uma pokebola"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-4xl text-red-600 p-10">Pokédex vazia</h2>
                    </div>
                )}
            </main>
        </>
    )
}
