import icon from '../images/logo.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='divOne'>
                <img src={icon} />
            </div>

            <div className='divTwo'>
                <div className='box one'>
                    <h1>
                        Product
                    </h1>

                    <li>
                        Overview
                    </li>
                    <li>
                        Pricing
                    </li>
                    <li>
                        Marketplace
                    </li>
                    <li>
                        Features
                    </li>
                    <li>
                        Integrations
                    </li>
                </div>

                <div className='box two'>
                    <h1>
                        Company
                    </h1>

                    <li>
                        About
                    </li>
                    <li>
                        Team
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Careers
                    </li>
                </div>

                <div className='box three'>
                    <h1>
                        Connect
                    </h1>

                    <li>
                        Contact
                    </li>
                    <li>
                        Newsletter
                    </li>
                    <li>
                        LinkedIn
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Footer