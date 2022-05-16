import Head from 'next/head'
import Header from '../../components/Header'
import PokemonsList from '../../components/PokemonsList'
import { useContext } from 'react'
import { PokemonContext } from '../../global'
import pokeballImageUrl from '../../../public/pokeball.svg'
import Image from 'next/image'
import Layout from '../../components/Layout'

export default function Pokedex() {
	const { pokedex } = useContext(PokemonContext)

	return (
		<>
			<Layout title='Pokédex'>
				{pokedex.length ? (
					<section className='w-full flex flex-col items-center justify-center'>
						<div className='max-w-[1280px] w-full p-4'>
							<h3 className='text-2xl text-zinc-600'>
								Pokémons capturados:{' '}
								<span className='font-bold text-blue-600'>{pokedex.length}</span>
							</h3>
						</div>
						<PokemonsList pokemons={pokedex} />
					</section>
				) : (
					<div className='flex flex-col items-center justify-center w-full h-[calc(100vh-112px)]'>
						<Image src={pokeballImageUrl} alt='Imagem de uma pokebola' width={300} height={300} />
						<h2 className='text-4xl text-red-600 p-10'>Pokédex vazia</h2>
					</div>
				)}
			</Layout>
		</>
	)
}
