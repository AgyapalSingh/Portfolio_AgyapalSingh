import React from 'react'
import "./experience.css"
import { FaCss3 } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { FaSass } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { SiBootstrap } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { AiOutlineApi } from 'react-icons/ai'
import { TbBinaryTree2 } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import { BsGit } from 'react-icons/bs'
import { FaAws } from 'react-icons/fa'
import { SiPostman } from 'react-icons/si'
import { BiLogoJava } from 'react-icons/bi'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaHtml5 className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaCss3 className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <IoLogoJavascript className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaSass className='experience_details-icon' />
                            <div>
                                <h4>SASS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiBootstrap className='experience_details-icon' />
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaReact className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>


                <div className="experience_backend">
                    <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <FaNodeJs className='experience_details-icon' />

                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiExpress className='experience_details-icon' />
                            <div>
                                <h4>Express JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiMongodb className='experience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BsFillDatabaseFill className='experience_details-icon' />
                            <div>
                                <h4>NoSQL</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiOutlineApi className='experience_details-icon' />
                            <div>
                                <h4>RestfulApi</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>

                <div className="experience_frontend">
                    <h3>Other Skills</h3>
                    <div className="experience_content">
                        <article className='experience_details'>
                            <BsGit className='experience_details-icon' />
                            <div>
                                <h4>GIT</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <AiFillGithub className='experience_details-icon' />
                            <div>
                                <h4>GITHUB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <FaAws className='experience_details-icon' />
                            <div>
                                <h4>AWS</h4>
                                <small className='text-light'>Beginer</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <SiPostman className='experience_details-icon' />
                            <div>
                                <h4>Postman</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <BiLogoJava className='experience_details-icon' />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='experience_details'>
                            <TbBinaryTree2 className='experience_details-icon' />
                            <div>
                                <h4>Data Structures</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience