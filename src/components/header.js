import logo from '../images/logo.svg'
import arr from '../images/icon-arrow-light.svg'
import hamburger from '../images/icon-hamburger.svg'

function Header() {
    return (
        <div className='header'>
            {/* Div One */}
            <nav className='navbar'>
                <div className='divOne'>
                    <div className='content'>
                        <img id='logo' src={logo} />
                        <div className='list'>
                            <li>Product</li>
                            <img src={arr} />
                        </div>
                        <div className='list'>
                            <li>Company</li>
                            <img src={arr} />
                        </div>
                        <div className='list'>
                            <li>Connect</li>
                            <img src={arr} />
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
                            <img src={hamburger} />
                        </div>
                    </div>
                </div>
            </nav>
            {/* Div Two */}
            <div className='intro'>
                <div className='divOne'>
                    <h1>
                        A modern publishing platform
                    </h1>
                    <p>
                        Grow your audience and build your online brand
                    </p>
                </div>
                <div className='divTwo'>
                    <button className='start'>
                        Start for Free
                    </button>
                    <button className='learn'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header 