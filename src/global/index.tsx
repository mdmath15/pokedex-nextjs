import { createContext, ReactNode, useState } from 'react'
import { PokemonDetails } from '../interfaces'

interface PokemonProviderProps {
	children: ReactNode
}

interface PokemonContext {
	pokedex: PokemonDetails[]
	setPokedex: (pokemon: PokemonDetails[]) => void
}

export const PokemonContext = createContext({} as PokemonContext)

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
	const [pokedex, setPokedex] = useState<PokemonDetails[]>([] as PokemonDetails[])

	return (
		<PokemonContext.Provider value={{ pokedex, setPokedex }}>{children}</PokemonContext.Provider>
	)
}
