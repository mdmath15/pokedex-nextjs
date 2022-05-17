import { PokemonDetails } from '../../interfaces'
import PokemonDetailsCard from '../PokemonDetailsCard'
import PokemonStatsSection from '../PokemonStatsSection'

interface PokemonDetailsSectionProps {
	pokemon: PokemonDetails
}

export default function PokemonDetailsSection({ pokemon }: PokemonDetailsSectionProps) {
	return (
		<section className='flex md:flex-col shadow-md w-full h-[744px] md:min-h-fit md:h-full justify-center  md:gap-4 rounded-md relative'>
			<PokemonDetailsCard pokemon={pokemon} />
			<PokemonStatsSection pokemon={pokemon} />
		</section>
	)
}
