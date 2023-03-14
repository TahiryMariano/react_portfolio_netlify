import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
                <i class="ri-home-line"></i>
            </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
                <i class="ri-user-line"></i>
            </a>
            <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}>
                <i class="ri-book-2-line"></i>
            </a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
                <i class="ri-service-line"></i>
            </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
                <i class="ri-discuss-fill"></i>
            </a>
        </nav>
    )
}

export default Nav