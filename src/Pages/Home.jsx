import React, { Fragment } from 'react'
import Education from '../components/Education'
import Services from '../components/Services'

export default function Home() {
  return (
    <Fragment>
        <div className="container-fluid ">
            <div className="row home-banner">
                <div className="col-lg-6 order-lg-0 order-sm-1 col-sm-12">
                    <div className="container banner-content">
                        <div className="banner-name">
                            <h2>HI, It's <span>MAREESWARI</span></h2>
                            <h2 className='banner-animation'>I'm a <span></span></h2>
                        </div>
                        <div className="banner-para">
                            <p>As a dedicated MERN stack developer and MCA graduate, I have honed my skills through a comprehensive 6-month internship, where I had the opportunity to work on live projects that pushed the boundaries of my technical expertise. My hands-on experience includes developing and deploying web applications, collaborating closely with clients to understand their needs, and participating in meetings to ensure the successful delivery of projects. My journey has equipped me with a strong foundation in full-stack development, and I am passionate about building innovative, efficient, and scalable solutions.</p>
                        </div>
                        <button className='banner-download'>DOWNLOAD CV <i class="fa-solid fa-download"></i></button>
                        <div className="social-icons">
                            <a href='tel:+91 6379050391'><i class="fa-solid fa-phone"></i></a>
                            <a href="mailto:jmareeswari0@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                            <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.linkedin.com/in/jmareeswari0/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href=""><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 order-sm-0 order-lg-1 col-sm-12">
                    <div className="container">
                        <div className="banner-img">
                        <img src="./images/banneimg.png" alt="WEBDEVELOPER"  />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <section className="education">
            <h2 className="education-heading">
                Professional & Academic Hightlights
            </h2>
            <Education/>
        </section>
        <br />
        <section className="services">
            <h2 className="services-heading">
                Services
            </h2>
            <Services/>
        </section>
    </Fragment>
  )
}
