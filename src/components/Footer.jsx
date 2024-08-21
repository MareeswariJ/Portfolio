import { Fragment } from "react";

export default function Footer(){
    return(
        <Fragment>
                <div className="social">
                <a href='tel:+91 6379050391' target="_blank"><i class="fa-solid fa-phone"></i></a>
                                <a href="mailto:jmareeswari0@gmail.com" target="_blank" ><i class="fa-solid fa-envelope"></i></a>
                                <a href="https://www.linkedin.com/in/jmareeswari0/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="https://wa.me/916379050391" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="https://github.com/MareeswariJ/" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-github"></i>
                                </a>  
                </div>
                <div >
                <ul className="menus">
                   <li>
                    <a href="#home">Home</a>
                    </li> 
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
               
                <p className="copyright">
                    @ Mareeswari || All Rights Reserved
                </p>

        </Fragment>
    )
}