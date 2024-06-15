import './About.css'

function About() {
    return(
        <section className='About markazi-text'>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className='karla-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolore, ullam veniam? Consectetur corrupti magni accusamus temporibus sint, 
                    velit ad animi iure dolorem minima quisquam aspernatur accusantium harum cupiditate quod cum!
                </p>
            </div>
            <div className='img'>
                <img className='img1' src="/assets/restauranfood.jpg" alt="" />
                <img className='img2' src="/assets/restauranfood.jpg" alt="" />
            </div>
        </section>
    )
}

export default About;