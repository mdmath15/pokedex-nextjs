import { PokemonDetails, PokemonResult, Stats } from '../types'
import { api } from './api'

export async function getPokemonsDetails(pokemon: PokemonResult, setPokemon: (pokemon:  PokemonDetails) => void) {
    await api.get(`/pokemon/${pokemon.name}`).then(({ data }) => {
        setPokemon({
            id: data.id,
            name: data.name,
            image: data.sprites.other["official-artwork"].front_default,
            types: data.types.map(
                (type: { [key: string]: { name: string } }) => type.type.name
            ),
            abilities: data.abilities.map(
                (ability: { [key: string]: { name: string } }) => ability.ability.name
            ),
            height: data.height,
            weight: data.weight,
            stats: data.stats.map((stat: { [key: string]: Stats }) => {
                return {
                    name: stat.stat.name,
                    value: stat.base_stat,
                }
            }),
        })
    })
}