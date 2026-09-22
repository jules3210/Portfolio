import ContactForm from './ContactForm';

function Contact() {
    return (
        <section className="bg-(--bg) py-16 text-(--text) min-h-screen" id="contact">
            <div className="max-w-6xl mx-auto px-6">

                {/* En-tête */}
                <div className="flex justify-between items-baseline mb-12 border-b border-(--line) pb-4">
                    <h2 className="text-4xl font-(--font-title)">Contact</h2>
                    <span className="text-(--text-muted) text-sm">Réponse sous 48h</span>
                </div>

                {/* Grille Contenu */}
                <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16">

                    {/* Colonne Gauche : Formulaire */}
                    <div>
                        <ContactForm />
                    </div>

                    {/* Colonne Droite : Infos */}
                    <div className="flex flex-col gap-10 md:border-l md:border-(--line) md:pl-12 pt-8 md:pt-0 border-t border-(--line) md:border-t-0">

                        <p className="text-(--text-muted) leading-relaxed">
                            Une idée de projet, une opportunité, ou juste envie<br className="hidden md:block" />
                            d'échanger ? N'hésitez pas à me contacter directement.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h4 className="text-(--accent) text-xs font-semibold tracking-wider uppercase mb-2">
                                    Email
                                </h4>
                                <p className="text-(--text) text-base">jules.saintsans@exemple.com</p>
                            </div>

                            <div>
                                <h4 className="text-(--accent) text-xs font-semibold tracking-wider uppercase mb-2">
                                    Localisation
                                </h4>
                                <p className="text-(--text) text-base">Paris, France</p>
                            </div>
                        </div>

                        <div className="flex gap-6 mt-4 text-sm text-(--text-muted)">
                            <a href="https://www.linkedin.com/in/jules-saint-sans" className="hover:text-(--text) transition-colors">LinkedIn</a>
                            <a href="https://github.com/jules3210" className="hover:text-(--text) transition-colors">GitHub</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
