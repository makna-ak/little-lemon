// import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet, Link } from 'react-router-dom';

function Root(){
    return(
        <>
            <header>
                <img src="/Logo.svg" alt="Little lemon logo" />
                <nav>
                    <ul className='karla-text'>
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Menu</Link></li>
                        <li><Link>Reservations</Link></li>
                        <li><Link>Order Online</Link></li>
                        <li><Link>Login</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;