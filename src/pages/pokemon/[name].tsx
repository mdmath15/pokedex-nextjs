import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import PokemonDetailsSection from '../../components/PokemonDetailsSection'
import { PokemonDetails, PokemonDetailsResponse } from '../../interfaces'
import { api } from '../../services/api'
import { getPokemonsDetails } from '../../utils/format-pokemon-details'

interface PokemonProps {
	pokemon: PokemonDetails
}

export default function Pokemon({ pokemon }: PokemonProps) {
	const router = useRouter()
	return (
		<>
			<Layout title={pokemon.name.toUpperCase()}>
				<section className='py-8 w-full max-w-5xl flex flex-col gap-2'>
					<button
						className='text-red-500 mx-4 self-start font-semibold transform hover:-translate-y-1 transition-transform ease-in duration-150 block'
						onClick={() => router.back()}
					>
						Go Back
					</button>
					<div className='px-4'>
						<PokemonDetailsSection pokemon={pokemon} />
					</div>
				</section>
			</Layout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const name = query.name as string

	const pokemonResponse: PokemonDetailsResponse = await api
		.get(`/pokemon/${name}`)
		.then((res) => res.data)
		.catch((err) => console.log(err.response))

	const pokemonDetails: PokemonDetails = getPokemonsDetails(pokemonResponse) as PokemonDetails

	return {
		props: {
			pokemon: pokemonDetails
		}
	}
}
