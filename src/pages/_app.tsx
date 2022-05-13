import "../styles/globals.css"
import type { AppProps } from "next/app"
import { PokemonProvider } from "../global"
import { NextUIProvider } from "@nextui-org/react"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PokemonProvider>
            <NextUIProvider>
            <Component {...pageProps} />
            </NextUIProvider>
        </PokemonProvider>
    )
}

export default MyApp
