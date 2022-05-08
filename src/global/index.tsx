import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { PokemonResult} from "../types"

interface PokemonProviderProps {
    children: ReactNode
}

interface PokemonContext {
    pokemons: PokemonResult[] | null
    isLoading: boolean
}

export const PokemonContext = createContext({} as PokemonContext)

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
    const [pokemons, setPokemons] = useState<PokemonResult[] | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        api.get(`/pokemon?limit=150&offset=0`)
            .then(({ data }) => {
                setPokemons(data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    return (
        <PokemonContext.Provider value={{ pokemons, isLoading }}>
            {children}
        </PokemonContext.Provider>
    )
}


