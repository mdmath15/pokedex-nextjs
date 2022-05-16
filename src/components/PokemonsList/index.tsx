import { PokemonDetails } from '../../interfaces'
import PokemonCard from '../PokemonCard'
interface PokemonListProps {
	pokemons?: PokemonDetails[]
	pokedex?: PokemonDetails[]
}

export default function PokemonsList({ pokemons }: PokemonListProps) {
	return (
		<>
			<div className='container max-w-7xl min-h-screen p-6 flex items-start justify-center gap-4 flex-wrap'>
				{pokemons?.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemonInfo={pokemon} />
				))}
			</div>
		</>
	)
}
