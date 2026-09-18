import {FaGithub, FaLinkedin} from "react-icons/fa"
import {useState} from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="relative flex justify-between items-center px-6 border-b-2 border-(--line) mx-15 py-5">

            <h1 className="text-2xl font-bold">JS</h1>


            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden ml-auto  text-2xl" aria-label="Menu">
                ☰
            </button>

            {isOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-(--bg-secondary) border-b border-(--line) flex flex-col items-center gap-6 py-6 md:hidden">
                    <ul className="flex flex-col items-center gap-4 text-lg font-medium">
                        <li><a href="#skills"  onClick={() => setIsOpen(!isOpen)} className="hover:text-(--accent) transition">Compétences</a></li>
                        <li><a href="#projects"  onClick={() => setIsOpen(!isOpen)} className="hover:text-(--accent) transition">Projets</a></li>
                        <li><a href="#timeline"  onClick={() => setIsOpen(!isOpen)} className="hover:text-(--accent) transition">Parcours</a></li>
                        <li><a href="#contact"  onClick={() => setIsOpen(!isOpen)} className="hover:text-(--accent) transition">Contact</a></li>
                    </ul>
                    <div className="flex gap-4 text-2xl">
                        <a href="https://www.linkedin.com/in/jules-saint-sans"
                           className="hover:text-(--accent) transition">
                            <FaLinkedin/>
                        </a>
                        <a href="https://github.com/jules3210" className="hover:text-(--accent) transition">
                            <FaGithub/>
                        </a>
                    </div>
                </div>
            )}

            <nav>
                <ul className="hidden md:flex gap-15 text-sm font-medium">
                    <li><a href="#skills" className="hover:text-(--accent) transition">Compétences</a></li>
                    <li><a href="#projects" className="hover:text-(--accent) transition">Projets</a></li>
                    <li><a href="#timeline" className="hover:text-(--accent)">Parcours</a></li>
                    <li><a href="#contact" className="hover:text-(--accent) transition">Contact</a></li>
                </ul>
            </nav>

            <div className="hidden md:flex gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/jules-saint-sans" className="hover:text-(--accent) transition">
                    <FaLinkedin/>
                </a>
                <a href="https://github.com/jules3210" className="hover:text-(--accent) transition">
                    <FaGithub/>
                </a>
            </div>
        </header>
    )
}

export default Header
