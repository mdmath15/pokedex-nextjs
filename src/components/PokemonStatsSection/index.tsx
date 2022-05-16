import { PokemonDetails } from '../../interfaces'
import PokemonAbilitiesCard from '../PokemonAbilitiesCard'
import PokemonStatsCard from '../PokemonStatsCard'
import PokemonTypeCard from '../PokemonTypeCard'

interface PokemonStatsSectionProps {
	pokemon: PokemonDetails
}

export default function PokemonStatsSection({ pokemon }: PokemonStatsSectionProps) {
	return (
		<section className='w-1/2 flex flex-col justify-around items-center rounded-tr-md rounded-br-md'>
			<PokemonTypeCard pokemon={pokemon} />
			<PokemonStatsCard pokemon={pokemon} />
			<PokemonAbilitiesCard pokemon={pokemon} />
		</section>
	)
}
