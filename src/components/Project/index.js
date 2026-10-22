import { Component } from 'react'

import { FaGithub } from "react-icons/fa";

import { FaExternalLinkAlt } from "react-icons/fa";

import Context from '../../Context/ContextComponents'

import Header from '../Header'

import './index.css'

class Project extends Component {
    render() {
        return (
            <Context.Consumer>
                {value => {
                    const { showMood } = value
                    return (
                        <div>
                            <Header />
                            <div className={showMood ? "bg-container-skills-light" : "bg-container-skills-dark"}>
                                <div>
                                    <h1 className='project-title'>Projects</h1>
                                    <p className='description-project'>
                                        A responsive personal portfolio website developed using HTML, CSS,
                                        JavaScript, and React.js to showcase<br /> my technical skills, projects,
                                        educational background, and development journey.
                                    </p>
                                    <div className='nagaraju-projects'>
                                        <div className='project-bg'>
                                            <div>
                                                <img src="https://i.ibb.co/JW7Yw9cF/Screenshot-202.png" className='logo-bg-container' alt="" />
                                            </div>
                                            <div className='bg-first-project'>
                                                <h1 className='title-para'>Personal Portfolio</h1>
                                                <p className='description-portfolio'>This portfolio showcases my technical skills, projects, and development
                                                    journey through a modern, responsive, and user-friendly interface.
                                                    Built with React.js, JavaScript, HTML, and CSS, it highlights my
                                                    experience in frontend development, interactive UI design, and
                                                    building responsive web applications.</p>

                                                <hr />
                                                <div className='container-live-demo'>
                                                    <button className='btn-click-project-codes'>
                                                        <FaGithub className='git-logo' />
                                                        <a href="" target="__blank" className='project-repo'>GitHub</a>
                                                    </button>

                                                    <button className='btn-click-project-live'>
                                                        <FaExternalLinkAlt className='enter-logo' />
                                                        <a className='project-repo-live'>Live Demo</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='project-bg'>
                                            <div>
                                                <img src="https://i.ibb.co/jvQJkQBx/Screenshot-203.png" className='logo-bg' alt="jobby-app" />
                                            </div>
                                            <div className='bg-first-project'>
                                                <h1 className='title-para'>Jobby App</h1>
                                                <p className='description-portfolio'>Jobby App is a job search application built with React.js that provides
                                                    a user-friendly interface for exploring job opportunities. It enables
                                                    users to browse job listings, search for relevant positions, filter
                                                    jobs based on preferences, and view detailed job information.
                                                    The application demonstrates React component development, API
                                                    integration, state management, and responsive UI design.</p>

                                                <hr />
                                                <div className='container-live-demo'>
                                                    <button className='btn-click-project-codes'>
                                                        <FaGithub className='git-logo' />
                                                        <a href="" target="__blank" className='project-repo'>GitHub</a>
                                                    </button>

                                                    <button className='btn-click-project-live'>
                                                        <FaExternalLinkAlt className='enter-logo' />
                                                        <a className='project-repo-live'>Live Demo</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='project-bg'>
                                            <div>
                                                <img src="https://i.ibb.co/KzwwYW9j/Screenshot-204.png" className='logo-bg' alt="school-website" />
                                            </div>
                                            <div className='bg-first-project'>
                                                <h1 className='title-para'>Tulas School — Responsive Website Design</h1>
                                                <p className='description-portfolio'>A responsive and user-friendly school website developed using HTML, CSS, and JavaScript. It presents school information, academic details, and activities through an attractive layout and easy navigation. The project focuses on creating a clean design and providing a smooth browsing experience across different devices.</p>

                                                <hr />
                                                <div className='container-live-demo'>
                                                    <button className='btn-click-project-codes'>
                                                        <FaGithub className='git-logo' />
                                                        <a href="" target="__blank" className='project-repo'>GitHub</a>
                                                    </button>

                                                    <button className='btn-click-project-live'>
                                                        <FaExternalLinkAlt className='enter-logo' />
                                                        <a className='project-repo-live'>Live Demo</a>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
                }
            </Context.Consumer >

        )
    }
}

export default Project