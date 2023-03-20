import React from 'react';
import './About.css';
import aboutImage from '../../assets/about-image.jpg';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={aboutImage} alt="about" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <i className="ri-award-fill about__icon"></i>
                            <h5>Experiences</h5>
                            <small>3+ Years working</small>
                        </article>
                        <article className='about__card'>
                            <i className="ri-user-3-fill about__icon"></i>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <i className="ri-folder-2-line about__icon"></i>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>
                        Hello!! I am Tahiry Mariano. A student in the third year of a License at ISPM, in the mention
                        of computers and telecommunication, following the electronics, computer systems and artificial intelligence (ESIIA) sector.<br />
                        I am a young enthusiast in the world of IT, especially web or mobile development, looking for an internship to develop my professional skills and
                        validate my bachelor's degree.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About