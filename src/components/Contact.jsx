import { Fragment } from "react";

export default function Contact(){
    return(
        <Fragment>
            <form action="">
                <div className="row">
                    <div className="col-lg-6">
                    <div className="input-group">
                    <div className="input-box">
                        <input type="text" placeholder="Fullname"/>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="input-box">
                        <input type="number" placeholder="Phone"/>
                        <input type="text" placeholder="Subject"/>
                    </div>
                </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="input-group">
                    <textarea name="" cols="30" rows="10" placeholder="your message" id=""></textarea>
                       
                </div>
                    </div>
                    <div className="contact-btn">
                        <button >Submit</button>

                        </div>

                </div>
                
                
            </form>
            
        </Fragment>
    )
}