// import jules from '../../assets/jules.png'

function Hero() {
    return (
        <section className="hero grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center px-6 mx-15 py-15 border-b-2 border-(--line)">
            <div className="flex flex-col items-start gap-4 min-w-0">
                <p className="text-(--accent)">Développeur web fullstack</p>

                <span className="inline-flex items-center gap-2 rounded-full border border-(--accent-dim) bg-(--bg-secondary) px-3 py-1 text-xs font-medium before:h-2 before:w-2 before:rounded-full before:bg-(--accent-dim)">
                    En recherche d'alternance
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
                    Jules <span className="block whitespace-nowrap">Saint-Sans</span>
                </h1>

                <div className="lg:hidden">
                    {/*<img src={jules} alt="Jules" className="w-full max-w-xs rounded-xl" />*/}
                </div>

                <p className="max-w-prose text-(--text-muted)">
                    <span className={"text-(--text)"}>Développeur fullstack</span>, spécialisé en <span className={"text-(--text)"}>React</span>, <span className={"text-(--text)"}>Symfony</span> et <span className={"text-(--text)"}>MySQL</span>, avec une expérience en <span className={"text-(--text)"}>e-commerce</span> et en <span className={"text-(--text)"}>CRM</span>.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="rounded-lg bg-(--accent) px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-80 ">
                        Voir mes projets
                    </a>
                    <a href="/Jules_SAINTSANS_CV.pdf" aria-label="Télécharger le CV" download className="rounded-lg border border-(--line) px-5 py-2.5 text-sm font-medium transition hover:border-(--text-muted)">
                        Télécharger mon CV
                    </a>
                    <a href="#contact" className="rounded-lg border border-(--line) px-5 py-2.5 text-sm font-medium transition hover:border-(--text-muted)">
                        Me contacter
                    </a>
                </div>
            </div>

            <div className="hidden lg:block min-w-0">
                {/*<img src={jules} alt="Jules" className="w-full rounded-2xl" />*/}
            </div>
        </section>
    )
}

export default Hero
