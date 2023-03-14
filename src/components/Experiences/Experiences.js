import React from 'react';
import './Experiences.css';

const Experiences = () => {
    return (
        <section id='experiences'>
            <h5>What skills I have?</h5>
            <h2>My experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>JAVASCRIPT</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>BOOTSTRAP</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>TALWIND</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>REACT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>POSTGRESQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <i className="ri-checkbox-circle-fill experience__details-icon"></i>
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF BACKEND  */}
            </div>
        </section>
    )
}

export default Experiences