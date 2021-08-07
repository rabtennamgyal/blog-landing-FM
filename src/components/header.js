import logo from '../images/logo.svg'
import arr from '../images/icon-arrow-light.svg'
import arr1 from '../images/icon-arrow-dark.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

import React, { useState } from 'react';

function Header() {

    // These are for Mobile Navbar Menu
    const [Ham, setHam] = useState(true)
    const [Close, setClose] = useState(false)

    function openClose() {
        if (Ham === true) {
            setHam(false)
            setClose(true)
            const menu = document.querySelector('.hiddenMenu')
            menu.style.display = 'flex'
        } else {
            setHam(true)
            setClose(false)
            const menu = document.querySelector('.hiddenMenu')
            menu.style.display = 'none'
        }
    }

    const [MobileMenu, SetMobileMenu] = useState(false)

    function openCloseMM() {
        if (MobileMenu === false) {
            SetMobileMenu(true)
            const img = document.querySelector('.arrow4')
            img.classList.add('rotateUp')
        } else {
            SetMobileMenu(false)
            const img = document.querySelector('.arrow4')
            img.classList.remove('rotateUp')
        }
    }

    // These are all relating to the Desktop Navbar Menu
    const [Menu, setMenu] = useState(false)

    function openCloseMenu() {
        if (Menu === false) {
            setMenu(true)
            const img = document.querySelector('.arrow')
            img.classList.add('rotateUp')
        } else {
            setMenu(false)
            const img = document.querySelector('.arrow')
            img.classList.remove('rotateUp')
        }
    }

    const [Menu1, setMenu1] = useState(false)

    function openCloseMenu1() {
        if (Menu1 === false) {
            setMenu1(true)
            const img = document.querySelector('.arrow1')
            img.classList.add('rotateUp')
        } else {
            setMenu1(false)
            const img = document.querySelector('.arrow1')
            img.classList.remove('rotateUp')
        }
    }

    const [Menu2, setMenu2] = useState(false)

    function openCloseMenu2() {
        if (Menu2 === false) {
            setMenu2(true)
            const img = document.querySelector('.arrow2')
            img.classList.add('rotateUp')
        } else {
            setMenu2(false)
            const img = document.querySelector('.arrow2')
            img.classList.remove('rotateUp')
        }
    }

    return (
        <div className='header'>
            {/* Div One */}
            <nav className='navbar'>
                <div className='divOne'>
                    <div className='content'>
                        <img alt='logo' id='logo' src={logo} />
                        <div className='list'>
                            <div className='menu'>
                                <li>Product</li>
                                <img className='arrow' alt='arrow down' src={arr} onClick={openCloseMenu} />
                            </div>

                            {Menu && <div className='menuItems'>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                            </div>}
                        </div>
                        <div className='list'>
                            <div className='menu'>
                                <li>Company</li>
                                <img className='arrow1' alt='arrow down' src={arr} onClick={openCloseMenu1} />
                            </div>
                            
                            {Menu1 && <div className='menuItems'>
                                <li>About</li>
                                <li>Teams</li>
                                <li>Blog</li>
                                <li>Career</li>
                            </div>}
                        </div>
                        <div className='list'>
                            <div className='menu'>
                                <li>Connect</li>
                                <img className='arrow2' alt='arrow down' src={arr} onClick={openCloseMenu2} />
                            </div>

                            {Menu2 && <div className='menuItems'>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li>LindedIn</li>
                            </div>}
                        </div>
                    </div>
                </div>

                <div className='divTwo'>
                    {/* Div One */}
                    <div className='content'>
                        <h1 className='login'>
                            Login
                        </h1>
                        <button className='signup'>
                            Sign Up
                        </button>
                        <div className='bar'>
                            {Ham && <img id='hamburger' alt='hamburger icon' src={hamburger} onClick={openClose} />}
                            {Close && <img id='close' alt='close icon' src={close} onClick={openClose} />}
                        </div>
                    </div>
                </div>
            </nav>

            
            {/* Hidden Menu */}
            <div className='hiddenMenu'>
                <div className='content'>
                    <div className='divOne'>
                        <li>Product</li>
                        <img class='arrow4' alt='arrow down' src={arr1} onClick={openCloseMM} />
                    </div>

                    {MobileMenu && <div className='divTwo'>
                        <div className='mobileHiddenMenu'>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                        </div>
                    </div>}
                </div>

                {/* <div className='content'>
                    <div className='divOne'>
                        <li>Company</li>
                        <img class='hr' alt='arrow down' src={arr1} />
                    </div>

                    <div className='divTwo'>
                        {Menu && <div className='menuItems'>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Careers</li>
                        </div>}
                    </div>
                </div> */}
            </div>
        

            {/* Div Two */}
            <div className='intro'>
                <div className='divOne'>
                    <h1>
                        <span>
                            A modern
                        </span>
                        <span>
                            publishing platform
                        </span>
                    </h1>
                    <p>
                        <span>
                            Grow your audience and build your 
                        </span>
                        <span id='brand'>
                            online brand
                        </span>
                    </p>
                </div>
                <div className='divTwo'>
                    <div className='content'>
                        <button className='start'>
                            Start for Free
                        </button>
                        <button className='learn'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header 