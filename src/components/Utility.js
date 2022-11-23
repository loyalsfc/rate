import React from "react";

function Utility(){
    return(
        <section className="utility mt-2" id="utilities">
            <div className="container margin-x-auto">
                <h2 
                    className="why-title title-mobile text-center"
                    data-aos="zoom-in-down"    
                >
                    KEY FEATURES
                </h2>
                <div className="use-case-container d-flex mt-2 flex-column">
                    <UseCases 
                        animation="slide-right"
                        title="Vigorous API"
                        icon="bullseye"
                        content='We have a public library available for smooth integration into dApp and Wallet.' 
                    />
                    <UseCases 
                        animation="slide-up"
                        title="Limit Trading"
                        icon="hand"
                        content="You get the power of controlling your trades through various set of trading options right at your fingertips." 
                    />
                    <UseCases 
                        animation="slide-right"
                        title="Multichain"
                        icon='link'
                        content="Our protocol is available on multiple blockchains and will keep on integrating potential blockchains in the coming time." 
                    />
                    <UseCases 
                        animation="slide-up"
                        title="Real-time quotes"
                        icon='clock'
                        content="We aggregate real-time quotes from KYC validated and trusted market makers, offering prices to all of our users." 
                    />
                    <UseCases 
                        animation="slide-right"
                        title="Verified Contract"
                        icon="circle-check"
                        content="πrates has a token of the same name on ethereum smart chain with verified contract and we plan on getting it AUDITED." 
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
            <div className="icon-wrapper">
                <i className={"fa-solid fa-" + props.icon}></i>
            </div>
            <h4 className="use-case-title text-center">{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}

export default Utility