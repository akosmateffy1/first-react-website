import React from "react";
import john from './images/john-doe.png'
import './About.css'

const About = () => {
    return(
        <div className="about">
            <div className="container">
                <img src={john} alt='john' />
                <div className="col-2">
                    <h2>About</h2>
                    <span className="line"></span>
                    <p>Intense is an international Financial Olanning company with offces i n multiple jurisdictions over the world. WWorking with insótense gives me the ability to advise internat ional expatriates living in the middle east from where i live in USA.</p>
                    <p>I am John Doe, A senior advisor for an independently owned financial planing company called intense.</p>
                    <button className="button">Explore More</button>
                </div>
            </div>
        </div>
    )
}


export default About