import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('loading');

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus('success');
                    e.target.reset();
                },
                () => {
                    setStatus('error');
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-(--text-muted)">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    required
                    className="w-full bg-(--bg-secondary) border border-(--line) rounded-md px-4 py-3 text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent) transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="mail" className="text-sm text-(--text-muted)">Email</label>
                <input
                    type="email"
                    id="mail"
                    name="mail"
                    placeholder="vous@exemple.com"
                    required
                    className="w-full bg-(--bg-secondary) border border-(--line) rounded-md px-4 py-3 text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent) transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-(--text-muted)">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Parlez-moi de votre projet..."
                    required
                    className="w-full bg-(--bg-secondary) border border-(--line) rounded-md px-4 py-3 text-(--text) placeholder:text-(--text-muted) focus:outline-none focus:border-(--accent) transition-colors resize-y"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-(--accent) text-(--bg) font-bold py-2.5 px-6 rounded-md w-fit hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
            >
                {status === 'loading' ? 'Envoi...' : 'Envoyer'}
            </button>

            {status === 'success' && <p className="text-green-500 text-sm mt-2">Message envoyé avec succès !</p>}
            {status === 'error' && <p className="text-red-500 text-sm mt-2">Une erreur est survenue lors de l'envoi.</p>}
        </form>
    );
}

export default ContactForm;
