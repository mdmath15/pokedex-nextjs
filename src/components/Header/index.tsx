import Image from "next/image"
import Link from "next/link"
import pokemonImageUrl from "../../../public/pokemon.svg"

export default function Header() {
    return (
        <header className="w-full px-8 flex justify-between items-center bg-blue-400">
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

            <nav className="flex items-center justify-center">
                <ul className="flex items-center">
                    <li className="w-32 py-10 bg-blue-400 hover:bg-blue-500 transition-colors text-center text-white">
                        <Link href={"/"}>
                            <a>Pokemons</a>
                        </Link>
                    </li>
                    <li className="w-32 py-10 bg-yellow-500 hover:bg-yellow-600 transition-colors text-center text-white">
                        <Link href={"/pokedex"}>
                            <a>Pokédex</a>
                        </Link>
                    </li>
                    <li className="w-32 py-10 bg-red-600 hover:bg-red-700 transition-colors text-center text-white">
                        <Link href={"/batalha"}>
                            <a>Batalha</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
