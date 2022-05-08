import Image from "next/image"
import pokemonImageUrl from "../../../public/pokemon.svg"

export default function Header() {
    return (
        <header className="w-full px-8 flex justify-between items-center bg-blue-400">
            <Image
                src={pokemonImageUrl}
                alt="Imagem com logo Pokémon"
                width={120}
                className="cursor-pointer"
            />
            
            <nav className="flex items-center justify-center">
                <ul className="flex items-center">
                    <li className="w-32 py-10 bg-blue-400 hover:bg-blue-500 transition-colors text-center text-white">
                        Pokemons
                    </li>
                    <li className="w-32 py-10 bg-yellow-500 hover:bg-yellow-600 transition-colors text-center text-white">
                        Pokédex
                    </li>
                    <li className="w-32 py-10 bg-red-600 hover:bg-red-700 transition-colors text-center text-white">
                        Batalha
                    </li>
                </ul>
            </nav>
        </header>
    )
}
