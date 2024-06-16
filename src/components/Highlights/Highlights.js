import './Highlights.css'

function Highlights() {

    const cards = [
        {
            img: '/assets/greek salad.jpg',
            name: 'Greek Salad',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {
            img: '/assets/bruchetta.svg',
            name: 'Bruchetta',
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        },
        {
            img: '/assets/lemon dessert.jpg',
            name: 'Lemon Dessert',
            price: '$5.00',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        },
    ]

    const listCards = cards.map((item) => {
        return(
        <article className='card'>
            <img src={item.img} alt={item.name} />
            <div className='card-description karla-text'>
                <div className='card-header'>
                    <h4 className='title markazi-text'>{item.name}</h4>
                    <p className='price'>{item.price}</p>
                </div>
                <p className='description'>{item.description}</p>
                <button className='order-btn karla-text'>Order a delivery</button>
            </div>
        </article>
        )
    })
    return(
        <section className='Highlights'>
            <div className='highlight-header'>
                <h1 className='highlight-title karla-text'>This weeks specials!</h1>
                <button className='primary-btn karla-text'>Online Menu</button>
            </div>
            <div className='card-container'>
                {listCards}
            </div>
        </section>
    )
}

export default Highlights;