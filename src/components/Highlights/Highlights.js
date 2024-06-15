import './Highlights.css'

function Highlights() {
    return(
        <section className='Highlights'>
            <div className='highlight-header'>
                <h1 className='highlight-title karla-text'>This weeks specials!</h1>
                <button className='primary-btn karla-text'>Online Menu</button>
            </div>
            <div className='card-container'>
                <article className='card'>
                    <img src="/assets/greek salad.jpg" alt="Greek Salad" />
                    <div className='karla-text'>
                        <div className='card-header'>
                            <h4 className='title markazi-text'>Greek Salad</h4>
                            <p className='price'>$12.99</p>
                        </div>
                        <p className='card-description'>The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='order-btn karla-text'>Order a delivery</button>
                    </div>
                </article>
                <article className='card'>
                    <img src="/assets/greek salad.jpg" alt="Greek Salad" />
                    <div className='karla-text'>
                        <div className='card-header'>
                            <h4 className='title markazi-text'>Greek Salad</h4>
                            <p className='price'>$12.99</p>
                        </div>
                        <p className='card-description'>The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='order-btn karla-text'>Order a delivery</button>
                    </div>
                </article>
                <article className='card'>
                    <img src="/assets/greek salad.jpg" alt="Greek Salad" />
                    <div className='karla-text'>
                        <div className='card-header'>
                            <h4 className='title markazi-text'>Greek Salad</h4>
                            <p className='price'>$12.99</p>
                        </div>
                        <p className='card-description'>The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, 
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button className='order-btn karla-text'>Order a delivery</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Highlights;