import React from 'react'
import "./project.css"
import IMG1 from '../../assets/SongifyTemplate/Songify1.png'
import IMG3 from '../../assets/EcommerceTemplate/Kart1.png'
import IMG2 from '../../assets/MovieTemplate/MovieMaster.png'
import IMG5 from '../../assets/DesiShopTemplate/DesiShop1.png'

const Project = () => {
    return (
        <section id='project'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container project_container">
                <article className='project_item'>
                    <div className="project_item-image">
                        <img src={IMG5} alt="desishop" />
                    </div>
                    <h3>Desi Shop - Ecommerce website</h3>
                    <h5 className='text-light'>[ Complete Ecommerce Website]</h5>
                    <p>Desi Shop is an Ecommerce webapplication created using MERN STACK.</p>
                    <div className='project_item-cta'>
                        <a href="https://github.com/AgyapalSingh/Desi_Shop" className='btn' target='_blank'>Github</a>
                        <a href="https://ochre-newt-hose.cyclic.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project_item'>
                    <div className="project_item-image">
                        <img src={IMG2} alt="desishop" />
                    </div>
                    <h3>MovieMaster - Movie website</h3>
                    <h5 className='text-light'>[ Complete Ecommerce Website]</h5>
                    <p>MovieMaster is a Movie Searching webapplication created using VITE+REACT.</p>
                    <div className='project_item-cta'>
                        <a href="https://github.com/AgyapalSingh/MovieMaster" className='btn' target='_blank'>Github</a>
                        <a href="https://movie-master-pro.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='project_item'>
                    <div className="project_item-image">
                        <img src={IMG1} alt="songify" />
                    </div>
                    <h3>Songify - Music App</h3>
                    <h5 className='text-light'>[ Template for Music Web Application ]</h5>
                    <p>Songify is music web application created using HTML, CSS and Bootstrap</p>

                    <div className='project_item-cta'>
                        <a href="https://github.com/AgyapalSingh/songify" className='btn' target='_blank'>Github</a>
                        <a href="https://songifymusicapp.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                <article className='project_item'>
                    <div className="project_item-image">
                        <img src={IMG3} alt="kart" />
                    </div>
                    <h3>KART</h3>
                    <h5 className='text-light'>[ Template for Ecommerce Website ]</h5>
                    <p>KART is Ecommerce website template created using HTML, CSS and JavaScript</p>
                    <div className='project_item-cta'>
                        <a href="https://github.com/AgyapalSingh/Shopping_Kart" className='btn' target='_blank'>Github</a>
                        <a href="https://kartprojectsample.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>



            </div>
        </section>
    )
}

export default Project