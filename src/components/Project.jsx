import { Fragment } from "react";

export default  function Project(){
    return(
        <Fragment>
            <div className="project-item row">
                    <div className="col-lg-3 project-items">
                        <div className="container project-img">
                            <img src="./images/gstudio1.png" alt="gstudio" className="img-fluid" />
                        </div>
                        <div className="project-content">
                            <a href="https://mareeswarij.github.io/gstudio-website/"><h4>G Studio Photography</h4></a>
                        </div>

                    </div>
                    <div className="col-lg-3 project-items">
                        <div className="container project-img">
                            <img src="./images/restaurant.png" alt="gstudio" className="img-fluid" />
                        </div>
                        <div className="project-content">
                            <a href="https://restaurant-menus-frontend.vercel.app/"><h4>Restaurant Menu</h4></a>
                        </div>

                    </div>
                    <div className="col-lg-3 project-items">
                        <div className="container project-img">
                            <img src="./images/boonthechef.png" alt="gstudio" className="img-fluid" />
                        </div>
                        <div className="project-content">
                            <a href="https://boonthechef.com/"><h4>E - Commerce Website</h4></a>
                        </div>

                    </div>
                    <div className="col-lg-3 project-items">
                        <div className="container project-img">
                            <img src="./images/arkbott.png" alt="gstudio" className="img-fluid" />
                        </div>
                        <div className="project-content">
                            <a href="https://arkbott.com/index.html"><h4>E - Commerce Website</h4></a>
                        </div>

                    </div>
            </div>
        </Fragment>
    )
}