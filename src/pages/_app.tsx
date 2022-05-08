import "../styles/globals.css"
import type { AppProps } from "next/app"
import { PokemonProvider } from "../global"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PokemonProvider>
            <Component {...pageProps} />
        </PokemonProvider>
    )
}

export default MyApp
