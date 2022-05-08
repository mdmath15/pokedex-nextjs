import Head from "next/head"
import Header from "../components/Header"

export default function Home() {
    return (
        <>
            <Head>
                <title>Pokédex - Home</title>
                <meta name="description" content="Pokédex - Home" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex items-center justify-center">
               <Header/>
            </main>
        </>
    )
}
