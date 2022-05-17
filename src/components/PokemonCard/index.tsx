import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { PokemonContext } from '../../global'
import { PokemonDetails } from '../../interfaces'
import { pokemonTypeColors } from './styles'

interface PokemonCardProps {
	pokemonInfo: PokemonDetails
}

export default function PokemonCard({ pokemonInfo }: PokemonCardProps) {
	const { pokedex, setPokedex } = useContext(PokemonContext)
	const router = useRouter()

	const pokemonCaptured: PokemonDetails | undefined = pokedex.find(
		(pokemon) => pokemon.name === pokemonInfo.name
	)

	const addToPokedex = (pokemonInfo: PokemonDetails) => {
		setPokedex([...pokedex, pokemonInfo])
	}

	const removeFromPokedex = (pokemonInfo: PokemonDetails) => {
		setPokedex(pokedex.filter((pokemon) => pokemon.name !== pokemonInfo.name))
	}

	return (
		<>
			{pokemonInfo && (
				<div className='max-w-[260px] w-full flex flex-col shadow-md px-4 py-2 gap-2 cursor-pointer'>
					<div
						className='flex flex-col'
						onClick={() => router.push(`/pokemon/${pokemonInfo.name}`)}
					>
						<Image src={pokemonInfo.image} alt='Pokemon' width={200} height={200} />
						<span className='text-zinc-500 pb-2'>Nº{pokemonInfo.id}</span>
						<h3 className=' text-xl uppercase font-[500] text-zinc-600'>{pokemonInfo.name}</h3>
						<div className='flex justify-between pb-2 pt-1 px-2'>
							{pokemonInfo.types.map((type: string) => (
								<span
									key={type}
									className='w-24 rounded-md text-center text-white '
									style={{
										backgroundColor: pokemonTypeColors[type].color
									}}
								>
									{type}
								</span>
							))}
						</div>
					</div>
					{pokemonCaptured ? (
						<button
							onClick={() => removeFromPokedex(pokemonInfo)}
							className='w-[200px] self-center py-2 rounded-md text-zinc-100 bg-red-400 hover:bg-red-500 transition-colors'
						>
							Remove from Pokédex
						</button>
					) : (
						<button
							onClick={() => addToPokedex(pokemonInfo)}
							className='w-[200px] self-center py-2 rounded-md text-zinc-100 bg-blue-400 hover:bg-blue-500 transition-colors'
						>
							Add to Pokédex
						</button>
					)}
				</div>
			)}
		</>
	)
}
