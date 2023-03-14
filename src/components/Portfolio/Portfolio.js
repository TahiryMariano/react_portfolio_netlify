import React from 'react';
import './Portfolio.css';
import img1 from '../../assets/portfolio_1.jpg';
import img2 from '../../assets/portfolio_2.jpg';
import img3 from '../../assets/portfolio_3.jpg';
import img4 from '../../assets/portfolio_4.jpg';
import img5 from '../../assets/portfolio_5.jpg';
import img6 from '../../assets/portfolio_6.jpg';


const data = [
    {
        id: 1,
        image: img1,
        title: 'Property Management in Symfony 5 and bootstrap 5',
        github: 'https://github.com',
        demo: "https://dribble.com"
    },
    {
        id: 2,
        image: img2,
        title: 'Contact Manager in React Js and Json Server',
        github: 'https://github.com',
        demo: "https://dribble.com"
    },
    {
        id: 3,
        image: img3,
        title: 'Crypto Currency dashboard & Financial visualization',
        github: 'https://github.com',
        demo: "https://dribble.com"
    },
    {
        id: 4,
        image: img4,
        title: 'Digital Library in React JS, Express JS and PostgreSql',
        github: 'https://github.com',
        demo: "https://dribble.com"
    },
    {
        id: 5,
        image: img5,
        title: 'Portfolio Pro in REACT JS and CSS3',
        github: 'https://github.com',
        demo: "https://dribble.com"
    },
    {
        id: 6,
        image: img6,
        title: 'Crypto Currency dashboard & Financial visualization',
        github: 'https://github.com',
        demo: "https://dribble.com"
    }
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target="_blank">GitHub</a>
                                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio