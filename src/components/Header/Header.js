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
                            <h5>Hello I'm</h5>
                            <h1>Tahiry Mariano</h1>
                            <h5 className='text-light'>Fullstack Developer</h5>
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