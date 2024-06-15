import './Testimonials.css'

function Testimonials() {
    return(
        <section className='Testimonials'>
            <h1 className='markazi-text'>Testimonials</h1>
            <div>
                <article className="testimonial karla-text">
                    <h4>Rating</h4>
                    <div>
                        <img src="/assets/greek salad.jpg" alt="" />
                        <p><strong>Name</strong></p>
                    </div>
                    <p>Review text</p>
                </article>
                <article className="testimonial karla-text">
                    <h4>Rating</h4>
                    <div>
                        <img src="/assets/greek salad.jpg" alt="" />
                        <p><strong>Name</strong></p>
                    </div>
                    <p>Review text</p>
                </article>
                <article className="testimonial karla-text">
                    <h4>Rating</h4>
                    <div>
                        <img src="/assets/greek salad.jpg" alt="" />
                        <p><strong>Name</strong></p>
                    </div>
                    <p>Review text</p>
                </article>
            </div>
        </section>
    )
}

export default Testimonials;