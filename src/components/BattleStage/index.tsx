import Image from 'next/image'
import { PokemonDetails } from '../../interfaces'
import PokemonStatsCard from '../PokemonStatsCard'
import versusImageUrl from '../../../public/versus.svg'

interface BattleStageProps {
	player1: PokemonDetails
	player2: PokemonDetails
}

export default function BattleStage({ player1, player2 }: BattleStageProps) {
	return (
		<div className='grid gap-4 grid-cols-3 items-center place-content-center'>
			{player1.name ? (
				<div className='px-10 sm:px-0'>
					<Image src={player1.image} width={300} height={300} alt={'Imagem Pokemon'} />
					<PokemonStatsCard pokemon={player1} full={true} />
				</div>
			) : (
				<div className='w-full'></div>
			)}

			<div className='flex items-center justify-center'>
				<Image src={versusImageUrl} width={100} height={100} alt={'Versus Image'} />
			</div>

			{player2.name ? (
				<div className='px-10 sm:px-0'>
					<Image src={player2.image} width={300} height={300} alt={'Imagem Pokemon'} className='' />
					<PokemonStatsCard pokemon={player2} full={true} />
				</div>
			) : (
				<div className='w-full'></div>
			)}
		</div>
	)
}
