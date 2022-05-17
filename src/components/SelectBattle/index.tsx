import { PokemonDetails } from "../../interfaces";

interface SelectBattleProps {
    pokedex: PokemonDetails[],
    setPlayer1: React.Dispatch<React.SetStateAction<PokemonDetails>>,
    setPlayer2: React.Dispatch<React.SetStateAction<PokemonDetails>>,
}

export default function SelectBattle({pokedex, setPlayer1, setPlayer2}: SelectBattleProps) {
  return (
		<div className='flex gap-2 justify-between'>
			<form className='flex flex-col gap-2'>
				<label htmlFor='player1'>Select Player 1</label>
				<select
					className='bg-zinc-300 p-2 rounded-md cursor-pointer'
					name='player1'
					defaultValue={''}
					onChange={(e) =>
						setPlayer1(pokedex.find((pokemon) => pokemon.name === e.target.value) as PokemonDetails)
					}
				>
					<option value={''} disabled>
						Select Pokémon
					</option>
					{pokedex.map((pokemon) => (
						<option key={pokemon.name} value={pokemon.name}>
							{pokemon.name}
						</option>
					))}
				</select>
			</form>
			<form className='flex flex-col gap-2'>
				<label htmlFor='player2' className='self-end'>
					Select Player 2
				</label>
				<select
					className='bg-zinc-300 p-2 rounded-md cursor-pointer'
					name='player2'
					defaultValue={''}
					onChange={(e) =>
						setPlayer2(pokedex.find((pokemon) => pokemon.name === e.target.value) as PokemonDetails)
					}
				>
					<option value={''} disabled>
						Select Pokémon
					</option>
					{pokedex.map((pokemon) => (
						<option key={pokemon.name} value={pokemon.name}>
							{pokemon.name}
						</option>
					))}
				</select>
			</form>
		</div>
	)
}

