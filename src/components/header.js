import logo from '../images/logo.svg'
import arr from '../images/icon-arrow-light.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

import React, { useState } from 'react';

function Header() {
    const [Ham, setHam] = useState(true)
    const [Close, setClose] = useState(false)

    function openClose() {
        if (Ham === true) {
            setHam(false)
            setClose(true)
        } else {
            setHam(true)
            setClose(false)
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
                            <li>Product</li>
                            <img alt='arrow down' src={arr} />

                            {/* <div className='menuItems'>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                            </div> */}
                        </div>
                        <div className='list'>
                            <li>Company</li>
                            <img alt='arrow down' src={arr} />
                        </div>
                        <div className='list'>
                            <li>Connect</li>
                            <img alt='arrow down' src={arr} />
                        </div>
                    </div>
                </div>

                <div className='divTwo'>
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