import React from "react";
import heroImage from '../assets/hero-image.png'
function Hero(){
    return(
        <div className="container margin-x-auto">
            <section className="d-flex flex-column-reverse align-items-center">
                <div>
                    <h2 
                        data-aos="fade-left"  
                        data-aos-duration="2000" 
                        className="about-title title-mobile"
                    >   
                        <span className="text-pry">πrates</span> - Empowering dApps and traders with most convenient aggregation and instant transactions.
                    </h2>
                    {/* <p  
                        data-aos="slide-up" 
                        data-aos-duration="2000" 
                        className="about-content max-width-100"
                    >
                        Bots have always been trusted to a large degree for their algorithmic forecasts. πrates MEV bot has come to be the game changer by giving making it available to everyone.
                    </p> */}
                </div>
                <div data-aos="slide-up" data-aos-duration="2000" className="bitcoin-illustration">
                    <img src={heroImage} className="hero-img width-100" alt="hero image"/>
                </div>
            </section>
        </div>
    )
}

export default Hero