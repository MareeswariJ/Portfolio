import { Fragment } from "react";

export default function Contact(){
    return(
        <Fragment>
            <form action="">
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
                <div className="input-group2">
                    <textarea name="" cols="30" rows="10" placeholder="your message" id=""></textarea>
                    <button className='banner-download'>Submit</button>

                </div>
            </form>
            
        </Fragment>
    )
}