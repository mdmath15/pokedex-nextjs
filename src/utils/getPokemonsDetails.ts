import { Ability, PokemonDetails, PokemonDetailsResponse, Stat, Type } from "../interfaces"

export function getPokemonsDetails(
    pokemon: PokemonDetailsResponse[] | PokemonDetailsResponse
): PokemonDetails[] | PokemonDetails {
    if (Array.isArray(pokemon)) {
        const pokemons: PokemonDetails[] = pokemon.map((pokemon: PokemonDetailsResponse) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other["official-artwork"].front_default,
                types: pokemon.types.map((type: Type) => type.type.name),
                abilities: pokemon.abilities.map((ability: Ability) => ability.ability.name),
                height: pokemon.height,
                weight: pokemon.weight,
                stats: pokemon.stats.map((stat: Stat) => {
                    return {
                        name: stat.stat.name,
                        value: stat.base_stat,
                    }
                }),
            }
        })
        return pokemons
    } else {
        const pokemons: PokemonDetails = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other["official-artwork"].front_default,
            types: pokemon.types.map((type: Type) => type.type.name),
            abilities: pokemon.abilities.map((ability: Ability) => ability.ability.name),
            height: pokemon.height,
            weight: pokemon.weight,
            stats: pokemon.stats.map((stat: Stat) => {
                return {
                    name: stat.stat.name,
                    value: stat.base_stat,
                }
            }),
        }
        return pokemons
    }
}
