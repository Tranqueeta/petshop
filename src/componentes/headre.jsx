import React from 'react';
import '../estilos/header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">Pet Store</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
