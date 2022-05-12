import Image from "next/image"
import Link from "next/link"
import pokemonImageUrl from "../../../public/pokemon.svg"

export default function Header() {
    return (
        <header className="w-full h-28 box-border px-8 flex justify-between items-center bg-blue-400">
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
                    <Link href={"/"}>
                        <li className="w-32 py-[44px] bg-blue-400 hover:bg-blue-500 transition-colors text-center text-white cursor-pointer">
                            <a>Pokemons</a>
                        </li>
                    </Link>
                    <Link href={"/pokedex"}>
                        <li className="w-32 py-[44px] bg-yellow-500 hover:bg-yellow-600 transition-colors text-center text-white cursor-pointer">
                            <a>Pokédex</a>
                        </li>
                    </Link>
                    <Link href={"/batalha"}>
                        <li className="w-32 py-[44px] bg-red-600 hover:bg-red-800 transition-colors text-center text-white cursor-pointer">
                            <a>Batalha</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
