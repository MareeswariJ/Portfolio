import { Fragment } from "react";

export default function Footer(){
    return(
        <Fragment>
                <div className="social">
                            <a href='tel:+91 6379050391'><i class="fa-solid fa-phone"></i></a>
                            <a href="mailto:jmareeswari0@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                            <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="https://www.linkedin.com/in/jmareeswari0/"><i class="fa-brands fa-linkedin"></i></a>
                            <a href=""><i class="fa-brands fa-github"></i></a>
                </div>
                <div >
                <ul className="menus">
                   <li>
                    <a href="">Home</a>
                    </li> 
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
                </div>
               
                <p className="copyright">
                    @ Mareeswari || All Rights Reserved
                </p>

        </Fragment>
    )
}