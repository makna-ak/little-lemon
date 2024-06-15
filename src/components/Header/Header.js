import './Header.css';

function Header() {
    return(
        <header>
            <img src="/Logo.svg" alt="Little lemon logo" />
            <nav>
                <ul className='karla-text'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;