import React from "react";

function Exception(){
    return(
        <section className="exception mt-2">
            <div className="container margin-x-auto">
                <h2 className="why-title title-mobile text-center" data-aos="zoom-in-up">What you can do with πrates MEV Bot</h2>
                <p className="exception-text text-center max-width-100" data-aos="zoom-in-down">πrates Mev bot is a bot that finds trading opportunities between price slippage of cryptocurrency exchanges and performs automatic low-risk trades.</p>
                <div className="use-case-container d-flex mt-2 flex-column">
                    <UseCases 
                        delay="50"
                        icon = "gavel"
                        title="Legal Compliant and Free"
                        content="The software is MIT licensed, so you are free to use it as you wish, it is free for all.
                        The πrates Sandwich bot is the best crypto trading bot that can help you. πrates is here to make bots accessible to everyone." 
                    />
                    <UseCases 
                        delay="150"
                        icon="sack-dollar"
                        title="No Tax"
                        content="You can set up your πrates Mev bot with 0 tax tokens, this is better than many other bots charging tax tokens. We have a premium package." 
                    />
                    <UseCases 
                        delay="300"
                        icon="bullseye"
                        title="Accessibility"
                        content="For a long time, MEV mechanisms can only be done by developers, or with their help. But πirates bot is breaking that barrier!" 
                    />  
                </div>
            </div>
        </section>
    )
}

function UseCases(props){
    return(
        <div data-aos="fade-up" data-aos-delay={props.delay} className="use-case exceptions-wrap width-100">
            <div className="icon-wrapper">
                <i className={"fa-solid fa-" + props.icon}></i>
            </div>
            <h4 className="use-case-title exceptions-wrap-title text-center">{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default Exception