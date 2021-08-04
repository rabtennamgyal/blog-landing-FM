import logo from '../images/logo.svg'
import arr from '../images/icon-arrow-dark.svg'

function Header() {
    return (
        <div className='header'>
            <nav className='navbar'>
                <div className='divOne'>
                    <div className='content'>
                        <img src={logo} />
                        <li>Product</li>
                        <li>Company</li>
                        <li>Connect</li>
                        <img id='arr' src={arr} />
                    </div>
                </div>

                <div className='divTwo'>
                    <button className='login'>
                        Login
                    </button>
                    <button className='signup'>
                        Sign Up
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header 