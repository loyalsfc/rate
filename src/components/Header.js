import React from "react";
import Logo from "../assets/logo.png"

function Header(){
    function showNav(){
        document.querySelector('.mobile-menu').style.top = 0;
    }
    function hideNav(){
        document.querySelector('.mobile-menu').style.top = '-100vh';
    }
    return(
        <header>
            <div className="mobile-menu">
                <i className="fa-solid fa-xmark close-btn" onClick={hideNav}></i>
                <ul className="mobile-nav-menu">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About</li>
                    <li className="menu-item">Utilities</li>
                    <li className="menu-item">Use Cases</li>
                    <li className="menu-item">testimonials</li>
                </ul>
            </div>
            <div className="container margin-x-auto">
                <nav>
                    <img src={Logo} className="logo-image"/>
                    <ul className="nav-menu d-sm-none">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">About</li>
                        <li className="menu-item">Utilities</li>
                        <li className="menu-item">Use Cases</li>
                        <li className="menu-item">testimonials</li>
                    </ul>
                    <i className="fa-solid fa-bars hamburger-menu" onClick={showNav}></i>
                </nav>
            </div>
        </header>
    )
}

export default Header