import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { PokemonContext } from '../../global'
import { BaseStatus, PokemonDetails } from '../../interfaces'
import { X } from 'phosphor-react'
import SelectBattle from '../../components/SelectBattle'
import BattleStage from '../../components/BattleStage'

export default function Battle() {
	const { pokedex } = useContext(PokemonContext)
	const [player1, setPlayer1] = useState({} as PokemonDetails)
	const [player2, setPlayer2] = useState({} as PokemonDetails)
	const [winner, setWinner] = useState({} as PokemonDetails)

	useEffect(() => {
		setWinner({} as PokemonDetails)
	}, [player1, player2])

	const handleWinner = (player1: PokemonDetails, player2: PokemonDetails) => {
		const player1Stats = player1.stats.reduce((acc, stat: BaseStatus) => {
			return acc + stat.value
		}, 0)

		const player2Stats = player2.stats.reduce((acc, stat: BaseStatus) => {
			return acc + stat.value
		}, 0)

		setWinner(player1Stats > player2Stats ? player1 : player2)
	}

	return (
		<Layout title='Battle'>
			<div className='container max-w-7xl min-h-screen gap-6 p-6 flex flex-col sm:items-center'>
				<h1 className='text-center text-4xl text-zinc-600 p-2'>
					Select two pokémons of your pokédex to battle!
				</h1>

				<SelectBattle pokedex={pokedex} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
				<BattleStage player1={player1} player2={player2} />

				<button
					onClick={() => handleWinner(player1, player2)}
					className='bg-red-400 hover:bg-red-500 transition-colors text-zinc-100 w-[200px] p-2 rounded-md cursor-pointer self-center'
				>
					Battle!
				</button>

				{winner.name && (
					<div
						className='w-full h-screen flex flex-col items-center justify-center fixed z-10 top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.8)]'
						onClick={() => setWinner({} as PokemonDetails)}
					>
						<div className='p-[40px] sm:p-2 bg-zinc-100 rounded-md relative flex flex-col items-center'>
							<X
								size={30}
								className='absolute top-4 right-4 cursor-pointer'
								onClick={() => setWinner({} as PokemonDetails)}
							/>
							<Image src={winner.image} width={300} height={300} alt={'Winner Image'} />
							<h1 className='text-3xl text-zinc-700'>{winner.name.toUpperCase()} WINS!!!</h1>
						</div>
					</div>
				)}
			</div>
		</Layout>
	)
}
