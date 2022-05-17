import Image from 'next/image'
import { PokemonDetails } from '../../interfaces'
import { pokemonTypeColors } from '../PokemonCard/styles'

interface PokemonDetailsCardProps {
	pokemon: PokemonDetails
}

export default function PokemonDetailsCard({ pokemon }: PokemonDetailsCardProps) {
	return (
		<div
			className='w-1/2 md:w-full flex flex-col justify-between items-start rounded-tl-md rounded-bl-md'
			style={{
				backgroundColor: pokemonTypeColors[pokemon.types[0]].color
			}}
		>
			<div className='px-6 pt-4'>
				<span className='text-white text-base'>#{pokemon.id}</span>
				<h1 className='text-4xl md:text-3xl text-white py-4'>{pokemon.name.toUpperCase()}</h1>
			</div>
			<div className='self-center min-md:absolute min-md:bottom-52 '>
				<Image src={pokemon.image} alt='Pokemon' width={320} height={320} />
			</div>
			<div className='self-center flex gap-12 md:gap-2 md:px-2 pb-4 min-md:absolute min-md:bottom-24'>
				<p className='text-2xl md:text-xl text-white'>
					Heigth<span className='px-2'>{pokemon.height / 10}m</span>
				</p>
				<p className='text-2xl md:text-xl text-white'>
					Weight<span className='px-2'>{pokemon.weight / 10}kg</span>
				</p>
			</div>
		</div>
	)
}
