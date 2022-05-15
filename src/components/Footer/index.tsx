import { EnvelopeSimple, GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react"

export default function Footer() {
    return (
        <footer className="w-full  bg-zinc-700">
            <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center">
                <h1 className="text-center p-8 font-medium text-zinc-200 tracking-wide">
                    Desenvolvido por Matheus Ribeiro
                </h1>

                <div className="flex gap-4">
                    <a href="http://github.com/mdmath15">
                        <GithubLogo size={32} weight="bold" />
                    </a>
                    <a href="http://linkedin.com/in/matheusribeiro15">
                        <LinkedinLogo size={32} weight="bold" />
                    </a>
                    <a href="https://wa.me/5518997659147">
                        <WhatsappLogo size={32} weight="bold" />
                    </a>
                    <a href="mailto:matheuslimaribeiro15@outlook.com">
                        <EnvelopeSimple size={32} weight="bold" />
                    </a>
                </div>

                <h1 className="text-center p-8 font-medium text-zinc-200 tracking-wide">
                    Todos os direitos reservados.
                </h1>
            </div>
        </footer>
    )
}
