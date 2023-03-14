import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className="footer__logo">TahiryM.</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experiences</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com">
                    <i className="ri-facebook-line contact__option-icon"></i>
                </a>
                <a href="https://instagram.com">
                    <i className="ri-instagram-line contact__option-icon"></i>
                </a>
                <a href="https://twitter.com">
                    <i className="ri-twitter-line contact__option-icon"></i>
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy;Tahiry. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer