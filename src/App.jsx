import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
    return (
        <div className="container mx-auto max-w-6xl px-6 md:px-12">
            <Header />
            <main>
                <Hero />
                <Skills />
                <Projects />
            </main>
        </div>
    )
}

export default App
