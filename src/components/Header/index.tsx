import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import pokemonImageUrl from "../../../public/pokemon.svg"

export default function Header() {
    const router = useRouter()
    return (
        <header className="w-full bg-blue-400 flex items-center justify-center">
            <div className="flex h-[88px] px-4 justify-between items-center max-w-[1440px] w-full">
                <Link href={"/"}>
                    <a>
                        <Image
                            src={pokemonImageUrl}
                            alt="Imagem com logo Pokémon"
                            width={120}
                            className="cursor-pointer"
                        />
                    </a>
                </Link>

                <nav className="flex">
                    <ul className="flex items-center justify-center ">
                        <Link href={"/"}>
                            <li
                                className={`${
                                    router.asPath == "/" ? "bg-blue-600" : "bg-blue-400"
                                } w-32 py-8 border-b-8 border-blue-600 hover:bg-blue-600 transition-colors text-center text-white cursor-pointer`}
                            >
                                <a>Pokemons</a>
                            </li>
                        </Link>
                        <Link href={"/pokedex"}>
                            <li
                                className={`${
                                    router.asPath == "/pokedex" ? "bg-yellow-500" : "bg-blue-400"
                                } w-32 py-8 border-b-8 border-yellow-500 hover:bg-yellow-500 transition-colors text-center text-white cursor-pointer`}
                            >
                                <a>Pokédex</a>
                            </li>
                        </Link>
                        <Link href={"/battle"}>
                            <li
                                className={`${
                                    router.asPath == "/battle" ? "bg-red-600" : "bg-blue-400"
                                } w-32 py-8 border-b-8 border-red-600 hover:bg-red-600 transition-colors text-center text-white cursor-pointer disabled`}
                            >
                                <a>Batalha</a>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
