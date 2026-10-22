import { Component } from "react";

import { FaLinkedin } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import Header from '../Header'

import './index.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="bg-container-contactUs">
                    <p className="title-contact">Contact</p>
                    <a href="mail To:karnanagaraju111@gmail.com" className="mail-anchor">karnanagaraju111@gmail.com | <span className="span-no">+91 9121423021</span></a>
                    <div className='btn-contact-git-linedin'>
                        <button className='btn-linedIn'>
                            <a className='anchor-link' href="https://www.linkedin.com/in/karna-nagaraju-0b3934382" target='__blank'><FaLinkedin />
                                LinkedIn</a>
                        </button>
                        <button className='btn-gitHub'>
                            <a className='anchor-git' href='https://github.com/Nagaraju-karna'><FaGithub className='logo-hub' />
                                GitHub</a>
                        </button >

                    </div>
                </div>
            </div>
        )
    }
}

export default Contact