import React from "react";
import "./project.css";
import IMG1 from "../../assets/MernStackProject/E-Shop.png";
import IMG2 from "../../assets/MernStackProject/SocialWeb.png";
import IMG3 from "../../assets/ReactProject/MovieMaster.png";
import IMG4 from "../../assets/ReactProject/Ipod.png";
import IMG5 from "../../assets/Umk/UNIQAYA.png";
import IMG6 from "../../assets/Umk/UMK.png";


const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG5} alt="e-shop" />
          </div>
          <h3>Uniqaya Lifestyles</h3>
          <h5 className="text-light">[ Ecommerce Website of Skincare brand]</h5>
          <p>Uniqaya.com is an Ecommerce website created using Shopify</p>
          <div className="project_item-cta">
            {/* <a href="https://github.com/AgyapalSingh/E-Shop-Hosting" className='btn' target='_blank'>Github</a> */}
            <a
              href="https://uniqaya.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG6} alt="e-shop" />
          </div>
          <h3>Unimarck Pharma</h3>
          <h5 className="text-light">[ Company's Website ]</h5>
          <p>Unimarckpharma.com is Company's website based on Wordpress</p>
          <div className="project_item-cta">
            {/* <a href="https://github.com/AgyapalSingh/E-Shop-Hosting" className='btn' target='_blank'>Github</a> */}
            <a
              href="https://unimarckpharma.com/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG1} alt="e-shop" />
          </div>
          <h3>E-Shop - Ecommerce website</h3>
          <h5 className="text-light">[ Complete Ecommerce Website]</h5>
          <p>
            E-Shop is an Ecommerce web application created using MERN STACK.
          </p>
          <div className="project_item-cta">
            <a
              href="https://github.com/AgyapalSingh/E-Shop-Hosting"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://e-shop-mern.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG3} alt="moviemaster" />
          </div>
          <h3>MovieMaster - Movie website</h3>
          <h5 className="text-light">[ Movie Searching Web Application]</h5>
          <p>
            MovieMaster is a Movie Searching web application created using VITE
            + REACT.
          </p>
          <div className="project_item-cta">
            <a
              href="https://github.com/AgyapalSingh/MovieMaster"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://movie-master-pro.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project_item">
          <div className="project_item-image">
            <img src={IMG4} alt="ipod" />
          </div>
          <h3>IPOD - Music App</h3>
          <h5 className="text-light">[ IPOD Music Application ]</h5>
          <p>Ipod is music web application created React.JS</p>

          <div className="project_item-cta">
            <a
              href="https://github.com/AgyapalSingh/Ipod"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://ipod-using-react.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
