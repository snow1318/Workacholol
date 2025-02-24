import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">SHOP</h1>
                <ul className="nav-links">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Add to Cart</a></li>
                </ul>
            </nav>
        </>
    )
}