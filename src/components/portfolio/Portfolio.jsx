import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/SongifyTemplate/Songify1.png'
import IMG2 from '../../assets/PortfolioTemplate/Portfolio1.png'
import IMG3 from '../../assets/EcommerceTemplate/Kart1.png'
import IMG4 from '../../assets/EcommerceTemplate/Kart2.png'
import IMG5 from '../../assets/DesiShopTemplate/DesiShop1.png'
import IMG6 from '../../assets/PortfolioTemplate/Portfolio2.png'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG5} alt="desishop" />
                    </div>
                    <h3>Desi Shop - Ecommerce website</h3>
                    <h5 className='text-light'>[ Complete Ecommerce Website]</h5>
                    <p>Desi Shop is an Ecommerce website created using MERN STACK.</p>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/AgyapalSingh/Desi_Shop" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="songify" />
                    </div>
                    <h3>Songify - Music App</h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML, CSS and Bootstrap</p>

                    <div className='portfolio_item-cta'>
                        <a href="https://github.com/AgyapalSingh/songify" className='btn' target='_blank'>Github</a>
                        <a href="https://songifymusicapp.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="portfolio" />
                    </div>
                    <h3>Portfolio - </h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML and CSS</p>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="kart" />
                    </div>
                    <h3>KART</h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML and CSS</p>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG5} alt="desishop" />
                    </div>
                    <h3>Desi Shop</h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML and CSS</p>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>

                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="kart" />
                    </div>
                    <h3>KART</h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML and CSS</p>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG5} alt="desishop" />
                    </div>
                    <h3>Desi Shop</h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML and CSS</p>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>Github</a>
                        <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio