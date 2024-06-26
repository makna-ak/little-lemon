import Hero from '../components/Hero/Hero'
import Highlights from '../components/Highlights/Highlights';
import Testimonials from '../components/Testimonials/Testimonials';
import About from '../components/About/About'

function Home() {
    return(
        <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </>
    )
}

export default Home;