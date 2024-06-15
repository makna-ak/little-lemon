import './Hero.css'

function Hero() {
    return(
        <section className='Hero'>
            <div>
                <h1 className='markazi-text'>Little Lemon</h1>
                <h3 className='markazi-text'>Chicago</h3>
                <p className='karla-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dicta et minima unde ex asperiores rerum fuga deleniti debitis doloribus doloremque. 
                    Quam accusamus, at ipsum nemo accusantium itaque ex architecto facilis!</p>
                <button className='primary-btn karla-text'>Reserve a Table</button>
            </div>
            <img src="/assets/restauranfood.jpg" alt="Restaurant food" />
        </section>
    )
}

export default Hero;