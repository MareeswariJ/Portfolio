import React, { Fragment } from 'react'
import Education from '../components/Education'
import Services from '../components/Services'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    const handleDownload =  ((e)=>{
        e.preventDefault();
        const link = document.createElement('a');
        link.href = './Mareeswari J.pdf';
        link.download='Mareeswari J.pdf'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    return (
        <Fragment>
            <div className="container-fluid" id="home">
                <div className="row home-banner">
                    <div className="col-lg-6 order-lg-0 order-sm-1 col-sm-12">
                        <div className="container banner-content">
                            <div className="banner-name">
                                <h2>HI, It's <span>MAREESWARI</span></h2>
                                <h2 className='banner-animation'>I'm a <span></span></h2>
                            </div>
                            <div className="banner-para">
                                <p>
                                    As a skilled MERN Stack Developer with a strong MCA background, I specialize in crafting dynamic and scalable web applications. With 7 months of practical experience, including a 4-month internship and 3 months as a full-time developer, I have successfully delivered multiple projects that showcase my expertise in both front-end and back-end technologies. My portfolio highlights my proficiency in React, Node.js, Express, and MongoDB, demonstrating my ability to create innovative solutions and collaborate effectively with teams. Explore my work to see how I transform ideas into impactful digital experiences.

                                </p>
                            </div>
                            <div className="hireme">
                                <div className="contact-hire">
                                    {/* <a href="https://drive.google.com/file/d/1u3__GdLW37iTnGXE_WfZFhBrEF5872ZO/view" target="_blank" rel="noopener noreferrer"> */}
                                        <button className="banner-download" onClick={handleDownload}>
                                            DOWNLOAD CV <i className="fa-solid fa-download"></i>
                                        </button>
                                    
                                </div>
                                <div className="contact-hire1">
                                    <a href="#contact">
                                        <button className="banner-download">HIRE ME</button>
                                    </a>
                                </div>
                            </div>




                            <div className="social-icons">
                                <a href='tel:+91 6379050391' target="_blank"><i class="fa-solid fa-phone"></i></a>
                                <a href="mailto:jmareeswari0@gmail.com" target="_blank" ><i class="fa-solid fa-envelope"></i></a>
                                <a href="https://www.linkedin.com/in/jmareeswari0/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="https://wa.me/916379050391" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://github.com/MareeswariJ/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>                        </div>
                        </div>
                    </div>
                    <div className="col-lg-5 order-sm-0 order-lg-1 col-sm-12">
                        <div className="container">
                            <div className="banner-img">
                                <img src="./images/banneimg.png" alt="WEBDEVELOPER"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className="education mt-0" id="about">
                <h2 className="education-heading">
                    Professional & Academic Hightlights
                </h2>
                <Education />
            </section>
            <br />
            <section className="services mt-0" id="services">
                <h2 className="services-heading">
                    Services
                </h2>
                <Services />
            </section>
            <section className='container' id="projects">
                <h2 className='Project-heading'>
                Project Highlights               
                 </h2>
                <Project />
            </section>
            <section className='contact' id="contact">
                <h2 className="contact-heading">
                    Contact <span>Me</span>
                </h2>
                <Contact />
            </section>
            <footer>
                <Footer />
            </footer>
        </Fragment>
    )
}
