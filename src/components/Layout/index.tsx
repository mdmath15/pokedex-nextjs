import Head from "next/head"
import Footer from "../Footer"
import Header from "../Header"

interface LayoutProps {
    children: React.ReactNode
    title: string
}

export default function Layout({ title, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center">
                <Header />
                {children}
                <Footer/>
            </main>
        </>
    )
}
