import { Component } from 'react'

import { Link } from 'react-router-dom'

import Context from '../../Context/ContextComponents'



import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import './index.css'

class Header extends Component {
    render() {
        return (
            <Context.Consumer  >
                {value => {
                    const { showMood, btnClickToChangeMood } = value
                    return (
                        <div className={showMood ? 'Header-bg-container-Light' : 'Header-bg-container-dark'} >
                            <div className='img-title-bg'>
                                <h1 className="folio-owner-name-dark">KN</h1>

                            </div>
                            <div className='person-details-bg'>
                                <div className={showMood ? 'light-theme' : 'dark-theme'} onClick={btnClickToChangeMood}>
                                    {showMood ? <MdLightMode /> : <MdOutlineDarkMode />}
                                </div>



                                <Link to="/">
                                    <p className={showMood ? 'light-para' : 'dark-para'}>Home</p>
                                </Link>
                                <Link to="/about">
                                    <p className={showMood ? 'light-para' : 'dark-para'}>About Me</p>
                                </Link>
                                <Link to='/skills'>
                                    <p className={showMood ? 'light-para' : 'dark-para'}>Skills</p>
                                </Link>
                                <Link to="/project">
                                    <p className={showMood ? 'light-para' : 'dark-para'}>Projects</p>
                                </Link>
                                <Link to="/contact">
                                    <p className={showMood ? 'light-para' : 'dark-para'}>Contact</p>
                                </Link>


                            </div>
                        </div>
                    )
                }
                }

            </Context.Consumer >


        )
    }
}

export default Header