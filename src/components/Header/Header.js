import React from 'react';
import './Header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import me from '../../assets/me_2.png';

const Header = () => {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <div className="details">
                        <div className="details__texte">
                            <h3>Hello I'm</h3>
                            <h1>Tahiry Mariano</h1>
                            <h2>Fullstack JavaScript Developer ♠ ☻ </h2>
                            <h3 className='description text-light'>Knack of building applications with front and back end operations</h3>
                            <CTA />
                        </div>
                        <div className="details__image">
                            <div className="details__image-background"></div>
                        </div>
                    </div>

                    <HeaderSocials />

                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>
            </header>
        </div>
    )
}

export default Header