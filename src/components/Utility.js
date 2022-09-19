import React from "react";

function Utility(){
    return(
        <section className="utility mt-2" id="utilities">
            <div className="container margin-x-auto">
                <h2 
                    className="why-title title-mobile text-center"
                    data-aos="zoom-in-down"    
                >
                    What you can do with πrates MEV Bot
                </h2>
                <div className="use-case-container d-flex mt-2 flex-column">
                    <UseCases 
                        animation="slide-right"
                        title="Front-Running"
                        content={"Front-running involves getting a transaction first in line in the execution queue ahead of a known pending transaction. πirates bot will scan the network for large orders on decentralized exchanges and submit competing transactions with higher gas fees to get them mined for you."} 
                    />
                    <UseCases 
                        animation="slide-up"
                        title="Sandwitch Attacks"
                        content="You can use the sandwich mechanism of our bot to extract MEV from unsuspecting traders on decentralized exchanges by manipulating the price of an asset." 
                    />
                    <UseCases 
                        animation="slide-right"
                        title="Back-Running"
                        content="Back-running is the practice of getting a transaction ordered second in line or immediately after a known pending target transaction. Our πirates back-running bots monitor the mempool for new token pair listings to fast-track your transactions" 
                    />
                </div>
            </div>
        </section>
    )
}

function UseCases(props){
    return(
        <div 
            className="use-case width-100"
            data-aos={props.animation}
            data-aos-delay="150"
            data-aos-duration="1500"
        >
            <h4 className="use-case-title text-center">{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default Utility