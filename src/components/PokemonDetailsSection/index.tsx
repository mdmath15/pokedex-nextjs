import { PokemonDetails } from "../../interfaces"
import PokemonDetailsCard from "../PokemonDetailsCard"
import PokemonStatsSection from "../PokemonStatsSection"

interface PokemonDetailsSectionProps {
    pokemon: PokemonDetails
}

export default function PokemonDetailsSection({ pokemon }: PokemonDetailsSectionProps) {
    return (
        <section className="flex shadow-md w-full h-[744px] justify-center rounded-md relative">
            <PokemonDetailsCard pokemon={pokemon} />
            <PokemonStatsSection pokemon={pokemon} />
        </section>
    )
}
