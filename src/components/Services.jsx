import { Fragment } from "react";

export  default function Services(){
    return(
        <Fragment>
            <div className="row">
                <div className="col-lg-4">
                    <div className="services-icon">
                   

                    </div>
                    <div className="services-content">
                        <h4>Frontend Development</h4>
                    </div>
                    <div>
                        <ul className="services-list">
                            <li><strong>HTML</strong>: Crafting the structure of web pages.</li>
                            <li><strong>CSS</strong>: Designing with style, making everything visually appealing.</li>
                            <li><strong>JAVASCRIPT</strong>:Bringing interactivity and life to the web</li>
                            <li><strong>ReactJS</strong>:Building dynamic and responsive user interfaces</li>                      
                    </ul>
                    </div>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4"></div>
            </div>
        </Fragment>
    )
}