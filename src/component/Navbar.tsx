
import Button from '../Utils/Button';
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <a className="logo-container" href="#home" aria-label="Clinton Tech home">
                <span className="logo">C<span>.</span></span>
                <span className="brand-name">clinton<span>tech</span></span>
            </a>

            <nav aria-label="Main navigation">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#programs">What we do</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <a className="nav-cta" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
            <Button ht= '40px' wt = '150px' bg = {"#007bff"} color = {"white"} text = {"Get in Touch"}/>
            <Button ht='40px' wt = '150px' bg = {"#007bff"} color = {"white"} text = 'your problem'/>
            <Button  isBorder text = 'Blue'/>
        </header>
    );
}

export default Navbar;
