import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine, } from 'react-icons/ri';
// for icons I installed react-icons;

import logo from '../../assets/logo.svg'

//FIGMA:-
// Figma is a cloud-based design tool primarily used for user interface (UI) and user experience (UX) design. It allows designers to create, prototype, and collaborate on web and mobile application interfaces in real-time. Unlike traditional design tools that are installed locally on a computer, Figma runs entirely in the browser, which makes it accessible from any device and ideal for team collaboration.


// here i follow a specific naming convention called BEM
// BEM -> BLOCK ELEMENT MODIFIER , The BEM (Block, Element, Modifier) model is a popular methodology for writing structured and maintainable CSS. It helps developers create reusable, scalable, and readable code by following a clear naming convention. 

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT-3</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Libraries</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navabr-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navabr-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ?
                    <RiCloseLine
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line
                        color='#fff'
                        size={27}
                        onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu &&
                    (
                        <div className='gpt3__navbar-menu_container scale-up-center'>
                            <div className='gpt3__navbar-menu_container-links'>
                                <Menu />
                                <div className="gpt3__navbar-menu_container-links-sign">
                                    <p>Sign In</p>
                                    <button type='button'>Sign Up</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default Navbar