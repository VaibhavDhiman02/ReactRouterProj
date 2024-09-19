import './Footer.css'
import { Link , NavLink } from 'react-router-dom'

function Footer() {
    return (

        <div className="main-div">
                    <Link className='logo' to="/">
                        <img src=".\src\assets\logoRR.png" alt="LOGO" />
                    </Link>

                    <div className="other-pages">
                        <ul>
                            <li>
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-600" : "text-orange-600"}`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-600" : "text-orange-600"}`
                                    }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-600" : "text-orange-600"}`
                                    }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-600" : "text-orange-600"}`
                                    }
                                >
                                    GITHUB
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="login-signin">
                        <Link className='login' to="/">
                            Login
                        </Link>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <Link className='signin' to="/">
                            Signin
                        </Link>
                    </div>
                </div>

    )
}

export default Footer;