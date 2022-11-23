import React from "react";
import thretes from '../assets/thretes.png'

function WhatIs(){
    return(
        <div className="container margin-x-auto" id="about">
            <section className="d-flex sm-column-reverse whatIs-container mt-2">
                <div className="whatIs-image width-50">
                    <img 
                        data-aos="zoom-in"
                        data-aos-duration="1500"
                        src={thretes} 
                        className="width-100" 
                        alt="image"
                    />
                </div>
                <div className="whatIs-content width-50 width-100">
                    <h2 
                        data-aos="flip-left" 
                        data-aos-duration="1500" 
                        className="why-title title-mobile sm-text-center"
                    >
                        What is MEV?
                    </h2>
                    <p 
                        data-aos="flip-right" 
                        data-aos-duration="1500" 
                        className="why-main-content max-width-100"
                    >
                        πrates aggregates decentralized exchanges and other DeFi services in one comprehensive and sophisticated interface to facilitate users’ interactions with decentralized finance — both for dApp developers and for end-users who are here for the core utility.
                    </p>
                </div>
            </section>
            
            <article className="mt-2 m-b-2">
                <h2 
                    data-aos="flip-left" 
                    data-aos-duration="1500" 
                    className="why-title title-mobile text-center mt-2 text-pry"
                >
                    Why use an DEX Aggregator?
                </h2>
                    <ul 
                        data-aos="flip-right" 
                        data-aos-duration="1500" 
                        className="max-width-100"
                    >
                        <li>DEX Aggregators are like search engine of DeFi Trading.</li>
                        <li>DEX Aggregators source liquidity from countless sources and can guarantee you a better market rate than when you search manually.</li>
                    </ul>

            </article>
            
            <article className="mt-2 m-b-2">
                <h2 
                    data-aos="flip-left" 
                    data-aos-duration="1500" 
                    className="why-title title-mobile text-center mt-2 text-pry"
                >
                    Why MEV Occur?
                </h2>
                <p 
                    data-aos="flip-right" 
                    data-aos-duration="1500" 
                    className="max-width-100 why-content"
                >
                    It can be inconvenient to manually hunt for the best price available plus analyze fees and this is where πrates comes into action.
                    πrates is designed to take that legwork out for you automatically by aggregating data from different sources so you don't have to.

                    There's no need to visit multiple exchanges to see Individual trading options,just visit <a href="https://piratemevbot.com/" className="text-pry">piratemevbot.com</a> .
                    {/* In Ethereum, miners are responsible for selecting and aggregating transactions into blocks. Crucially, they have full autonomy in deciding which transactions from the mempool—an off-chain space where pending transactions await confirmation—they’ll include in the blocks they mine. 
                <br/><br/>   
                    As miners, validators, and sequencers optimize for profit, they tend to select and order transactions by the highest gas price or transaction fees. However, the protocol does not require transactions to be ordered according to fees. Miners can leverage their discretionary ability to reorder transactions to extract additional profits from users. This “irregular” stream of revenue is MEV.
                <br/><br/>
                    There is only one solution to deal with these toxic mev bots and the solution is to make it a easily accesible, open to everyone. */}
                </p>
            </article>
        </div>
    )
}

// function Feature(props){
//     return(
//         <div className={"why-crappo-content width-100 mb-2 " + props.class}>
//             <img 
//                 data-aos="zoom-in"
//                 data-aos-duration="1500"
//                 src={props.img} 
//                 className="width-100"    
//             />
//             <div className="why-text width-100">
//                 <h3 data-aos="flip-left" data-aos-duration="1500" className="why-title title-mobile">{props.title}</h3>
//                 <p data-aos="flip-right" data-aos-duration="1500" className="why-main-content">{props.content}</p>
//                 <button data-aos="slide-up" data-aos-duration="1500" className="button-sm mb-2">Learn More</button>
//             </div>
//         </div>
//     )
// }

export default WhatIs