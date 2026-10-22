import { Component } from "react";

import Context from '../../Context/ContextComponents'

import './index.css'

import Header from "../Header";

class Home extends Component {

    render() {
        return (
            <Context.Consumer>
                {value => {
                    const { showMood } = value

                    return (<div>
                        <Header />
                        <div className={showMood ? 'bg-container-home-light' : "bg-container-home-dark"} >
                            < div className={showMood ? 'bg-container-details-home-light' : "bg-container-details-home-dark"} >
                                <div>
                                    <h1 className={showMood ? 'light-head-title' : "dark-head-title"}>Hi, I'm Karna Nagaraju 👋</h1>
                                    <p className={showMood ? 'light-para-title' : "dark-para-title"}>Frontend Developer<br />| Aspiring Mern Full Stack Developer</p>
                                    <p className={showMood ? 'light-para-description' : "dark-para-description"}>I'm a passionate developer with hands-on experience building responsive and interactive web applications using HTML, CSS, JavaScript, and React.js.</p>

                                    <p className={showMood ? 'light-para-description' : "dark-para-description"}>I enjoy creating user-friendly interfaces, solving problems, and learning new technologies to build better web experiences.</p>
                                    <button type="button" className="btn-download">
                                        <a className="anchor-element" href="https://drive.google.com/file/d/12u-adufFIO9d15LweHOMXFYT1GRnpJP9/view?usp=drivesdk⁠" target="__blank">Download Resume</a>
                                    </button>
                                </div>
                                <div>

                                    <img src="https://i.ibb.co/jZQWKssN/pic-Portfolio.png" className='img-logo' alt="profile-logo" />

                                </div>
                            </div>
                        </div>
                    </div>)
                }
                }
            </Context.Consumer >


        )
    }
}

export default Home