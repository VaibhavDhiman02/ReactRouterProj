import React from 'react'
import { Link , NavLink } from 'react-router-dom'
import './Header.css'


function Header () {

    return (

        <header className="main-header">

            <nav className="navbar">

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
                                        `${isActive ? "text-gray-500" : "text-orange-600"}`
                                    }
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-500" : "text-orange-600"}`
                                    }
                                >
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-500" : "text-orange-600"}`
                                    }
                                >
                                    CONTACT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/github"
                                    className={({isActive}) => 
                                        `${isActive ? "text-gray-500" : "text-orange-600"}`
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

            </nav>

        </header>

    )

}

export default Header;