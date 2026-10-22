import { Component } from 'react'

import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import Header from '../Header'

import './index.css'

class About extends Component {
    btnToContactPage = () => {
        const { history } = this.props
        history.replace('/contact')
    }
    render() {

        return (
            <div>
                <Header />
                <div className='bg-container'>
                    <div>
                        <h1 className='heading-aboutMe'>About Me</h1>
                        <p className='para-aboutme'>Hello! I'm Karna Nagaraju, an aspiring Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. I hold a Bachelor's degree in Electrical and Electronics Engineering from MLR Institute of Technology. My interest in technology and software development has motivated me to pursue a career in the IT industry.</p>
                        <p className='para-aboutme'>I have hands-on experience with HTML, CSS, JavaScript, and React.js, along with knowledge of Node.js, Express.js, and SQL. I enjoy creating interactive user interfaces, developing web applications, and exploring how frontend and backend technologies work together.</p>
                        <p className='para-aboutme'>Through practical projects, I continue to strengthen my programming skills, improve my problem-solving abilities, and learn modern web development techniques. I believe in continuous learning, writing clean code, and creating applications that provide a great user experience.</p>
                        <p className='para-aboutme'>My goal is to become a skilled software developer, contribute to real-world projects, collaborate with experienced professionals, and build meaningful digital solutions. I'm always eager to learn new technologies, take on challenges, and grow professionally.</p>
                        <h1 className='heading-aboutMe'>Education</h1>
                        <p className='descrition'>Bachelor of Technology (B- Tech) Electrical and Electronics Engineering</p>
                        <p className='para-education'>MLR Institute of Technology</p>
                        <p className='para-education'>Percentage: 70%</p>

                        <h1 className='heading-aboutMe'>Mern Full Stack Development Course</h1>
                        <h1 className='descrition'>NxtWave (CCBP 4.0 Academy)</h1>
                        <p className='para-education'>Learning web development technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, and SQL,<br /> through hands-on practice and projects.</p>

                    </div>
                    <div>
                        <img className='about-logo' src="https://i.ibb.co/QjkxHDjW/pic-Aboutme1.png" alt="about-img" />
                        <div className='btn-contact-git-linedin'>
                            <button className='btn-linedIn'>
                                <a className='anchor-link' href="https://www.linkedin.com/in/karna-nagaraju-0b3934382" target='__blank'><FaLinkedin />
                                    LinkedIn</a>
                            </button>
                            <button className='btn-gitHub'>
                                <a className='anchor-git' href='https://github.com/Nagaraju-karna'><FaGithub className='logo-hub' />
                                    GitHub</a>
                            </button >
                            <button onClick={this.btnToContactPage} className='btn-contact'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About