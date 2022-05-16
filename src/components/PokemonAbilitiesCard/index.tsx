import { PokemonDetails } from '../../interfaces'

interface PokemonAbilitiesCardProps {
	pokemon: PokemonDetails
}

export default function PokemonAbilitiesCard({ pokemon }: PokemonAbilitiesCardProps) {
	return (
		<div className='flex flex-col gap-8 items-center w-full'>
			<h1 className='text-2xl text-zinc-600'>Abilities</h1>
			<div className='w-1/2 flex flex-col gap-2'>
				{pokemon.abilities.map((ability: string) => {
					return (
						<p key={ability} className='font-bold text-blue-600 flex justify-between'>
							{ability.toUpperCase()}
						</p>
					)
				})}
			</div>
		</div>
	)
}
