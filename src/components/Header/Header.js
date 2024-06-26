import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return(
        <header>
            <div>
                <Link to={`/`}><img src="/Logo.svg" alt="Little lemon logo" /></Link>
                <button className="menu-toggle" onClick={toggleMenu}aria-label='Open Menu'>
                    <img src="/assets/icon hamburger menu.svg" alt=""/>
                </button>
            </div>
            <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
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