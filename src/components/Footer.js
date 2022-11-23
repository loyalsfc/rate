import React from "react"
import Logo from "../assets/logo.png"

function Footer(){
    return(
        <footer className="mt-2">
            <div className="container margin-x-auto">
                <div className="footer-links flex-column mb-2">
                    <img src={Logo} className="footer-logo mb-2" alt="logo" />
                    <Footerlinks 
                        title="Quick Link"
                        link1="Home"
                        link2="About"
                        link3="Utilities"
                        link4="Use Cases"
                        link5="testimonials"
                        linAddr2="#about"
                        linAddr3="#utilities"
                        linAddr4="#use-cases"
                        linAddr5="#testimonials"
                    />
                    <Footerlinks 
                        title="Resources"
                        link1="About Us"
                        link2="MEV API"
                        link3="Contact us"
                        link4="Careers"
                        link5="Disclaimer"
                        linAddr2="#"
                        linAddr3="#"
                        linAddr4="# "
                        linAddr5="#"
                    />
                </div>
                <div className="footer-text flex-column">
                    <p className="copyright">&copy;πrates BOT. All rights reserved </p>
                    <div className="social">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function Footerlinks(props){
    return(
        <div className="link-wrap">
            <h5 className="link-title mb-1">{props.title}</h5>
            <ul className="footer-link mb-2">
                <a href={"#"}><li>{props.link1}</li></a>
                <a href={props.linAddr2}><li>{props.link2}</li></a>
                <a href={props.linAddr3}><li>{props.link3}</li></a>
                <a href={props.linAddr4}><li>{props.link4}</li></a>
                <a href={props.linAddr5}><li>{props.link5}</li></a>
            </ul>
        </div>
    )
}

export default Footer