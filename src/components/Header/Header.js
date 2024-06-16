import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
        <header>
            <Link to={`/`}><img src="/Logo.svg" alt="Little lemon logo" /></Link>
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
    )
}

export default Header;