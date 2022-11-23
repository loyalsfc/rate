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
                    <a href="#"><li className="menu-item" onClick={hideNav}>Home</li></a>
                    <a href="#about"><li className="menu-item" onClick={hideNav}>About</li></a>
                    <a href="#utilities"><li className="menu-item" onClick={hideNav}>Utilities</li></a>
                    <a href="#use-cases"><li className="menu-item" onClick={hideNav}>Use Cases</li></a>
                    <a href="#testimonial"><li className="menu-item" onClick={hideNav}>testimonials</li></a>
                </ul>
            </div>
            <div className="container margin-x-auto">
                <nav>
                    <img src={Logo} className="logo-image" alt="logo"/>
                    <ul className="nav-menu d-sm-none">
                        <a href="#"><li className="menu-item">Home</li></a>
                        <a href="#about"><li className="menu-item">About</li></a>
                        <a href="#utilities"><li className="menu-item">Utilities</li></a>
                        <a href="#use-cases"><li className="menu-item">Use Cases</li></a>
                        <a href="#testimonial"><li className="menu-item">testimonials</li></a>
                    </ul>
                    <i className="fa-solid fa-bars hamburger-menu" onClick={showNav}></i>
                </nav>
            </div>
        </header>
    )
}

export default Header