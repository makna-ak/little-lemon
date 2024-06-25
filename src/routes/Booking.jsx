import '../index.css'

function Booking() {
    return(
        <>
            <section className="Booking">
                <div>
                    <h1 className='markazi-text'>Reservation</h1>
                    <form action="" className='karla-text'>
                        <label htmlFor="date">Choose date</label>
                        <input type="date" name="date" id="date" />
                        <label htmlFor="time">Choose time</label>
                        <select name="time" id="time">
                            <option value="">17:00</option>
                            <option value="">18:00</option>
                            <option value="">19:00</option>
                            <option value="">20:00</option>
                            <option value="">21:00</option>
                            <option value="">22:00</option>
                        </select>
                        <label htmlFor="guests">Number of guests</label>
                        <input type="range" min={0} max={10} name="guests" id="guests" />
                        <label htmlFor="occasion">Occasion</label>
                        <select name="occasion" id="occasion">
                            <option value="">Birthday</option>
                            <option value="">Anniversary</option>
                        </select>
                        <button className='primary-btn' type="submit">Make your reservation</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Booking;