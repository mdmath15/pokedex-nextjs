import { BaseStatus, PokemonDetails } from '../../interfaces'

interface PokemonStatsCardProps {
	pokemon: PokemonDetails
}
export default function PokemonStatsCard({ pokemon }: PokemonStatsCardProps) {
	return (
		<div className='flex flex-col gap-8 items-center w-full'>
			<h1 className='text-2xl text-zinc-600'>Stats</h1>
			<div className='w-1/2 flex flex-col gap-2'>
				{pokemon.stats.map((stat: BaseStatus) => {
					return (
						<p key={stat.name} className='font-bold text-zinc-600 flex justify-between'>
							{stat.name.toUpperCase()}
							<span className='font-medium text-blue-600'>{stat.value}</span>
						</p>
					)
				})}
			</div>
		</div>
	)
}
