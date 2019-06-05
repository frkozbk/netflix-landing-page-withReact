import React from 'react'
import Logo from '../Logo'
import './Header.scss'
const Header = () => {
    return (
        <header id="header">
            <nav>
                <div className="nav-container">
                    <Logo/>
                    <ul className="nav-menu">
                        <li className="nav-menu-items">Browse</li>
                        <li className="nav-menu-items">My List</li>
                        <li className="nav-menu-items">Top Picks</li>
                        <li className="nav-menu-items">Recent</li>
                    </ul>
                </div>
                <input type="text" id="nav-input" placeholder="search"/>
                <div className="user-logo"></div>
            </nav>
        </header>
    )
}
export default Header