import { Component } from "react";

import { FaReact } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";

import { FaCss3Alt } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";

import { FaNode } from "react-icons/fa";

import { SiExpress } from "react-icons/si";

import { IoGitBranchOutline } from "react-icons/io5";

import { FaPython } from "react-icons/fa";



import { SiMysql } from "react-icons/si";

import { VscVscode } from "react-icons/vsc"

import { FaGithub } from "react-icons/fa";

import { FaPaintbrush } from "react-icons/fa6";


import { VscSettingsCompact } from "react-icons/vsc";

import { FaDatabase } from "react-icons/fa";

import { GoTools } from "react-icons/go";

import Context from "../../Context/ContextComponents";

import Header from '../Header'

import './index.css'

class Skills extends Component {
    render() {
        return (
            <Context.Consumer>
                {value => {
                    const { showMood } = value
                    return (
                        <div>
                            <Header />
                            <div className={showMood ? "bg-container-skills-lights" : "bg-container-skills-darks"} >

                                <h1 className={showMood ? 'skills-title-light' : "skills-title-dark"} >Skills</h1>
                                <p className={showMood ? 'skills-para-light' : "skills-para-dark"}>Technologies I work with</p>
                                <div className="bg-skills-container">
                                    <div className="border-bg-frondend-skills">
                                        <div className="icons-display">
                                            <FaPaintbrush className="icons-frontend" />
                                            <p className="title-front">Frontend</p>
                                        </div>
                                        <p className="description">Designing and developing responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and React.js, with a focus on reusable components, interactive features, and consistent user experiences across devices.</p>
                                        <div className="icons-skills-bg">
                                            <div className="skills">
                                                <FaReact className="icons" />
                                                <p className="skill-name">React.js</p>
                                            </div>
                                            <div className="skills">
                                                <FaHtml5 className="icons-html" />
                                                <p className="skill-name">Html</p>
                                            </div>

                                            <div className="skills">
                                                <FaCss3Alt className="icons-css" />
                                                <p className="skill-name">CSS</p>
                                            </div>

                                            <div className="skills">
                                                <IoLogoJavascript className="icons-js" />
                                                <p className="skill-name">Javascript</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="border-bg-backend-skills">
                                        <div className="icons-display">
                                            <VscSettingsCompact className="icons-frontend" />
                                            <p className="title-front">Backend</p>
                                        </div>
                                        <p className="description">Building server-side applications using Node.js and Express.js, with an understanding of REST APIs, request handling, middleware, and backend application logic.</p>

                                        <div className="icons-skills-bg">
                                            <div className="skills">
                                                <FaNode className="node-icons" />
                                                <p className="skill-name">Node.js</p>
                                            </div>
                                            <div className="skills">
                                                <SiExpress className="express-icons" />
                                                <p className="skill-name">Express.js</p>
                                            </div>

                                            <div className="skills">
                                                <FaPython className="python-icons" />
                                                <p className="skill-name">Python</p>
                                            </div>

                                            <div className="skills">
                                                < IoGitBranchOutline className="restApi-icons" />
                                                <p className="skill-name">Rest API</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="bg-skills-container">
                                    <div className="border-bg-frondend-skills">
                                        <div className="icons-display">
                                            <FaDatabase className="icons-frontend" />
                                            <p className="title-front">DataBase Systems</p>
                                        </div>
                                        <p className="description">Writing SQL queries to retrieve, insert, update, and manage data, with an understanding of database operations, data relationships, and efficient data retrieval.</p>
                                        <div className="icons-skills-bg">
                                            <div className="skills">
                                                <SiMysql className="sql-icons" />
                                                <p className="skill-name">MySQL</p>
                                            </div>


                                            <div className="skills">

                                                <p className="skill-name">SQL</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="border-bg-frondend-skills">
                                        <div className="icons-display">
                                            <GoTools className="icons-frontend" />
                                            <p className="title-front">Development Tools</p>
                                        </div>
                                        <p className="description">Using GitHub for version control and source code management, VS Code for development, and Postman for testing APIs and verifying application responses.</p>

                                        <div className="icons-skills-bg">
                                            <div className="skills">
                                                < VscVscode className="vs-icons" />
                                                <p className="skill-name">Vs Code</p>
                                            </div>


                                            <div className="skills">
                                                <FaGithub className="git-icons" />
                                                <p className="skill-name">GitHub</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}

export default Skills