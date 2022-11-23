import React from "react";

export default function Testimonials(){
    return(
        <section>
            <div className="container margin-x-auto">
                <h2 className="why-title title-mobile text-center text-pry" data-aos="slide-down">TESTIMONIALS</h2>
                <div className="testimonials d-flex flex-column ">
                    <Testimony
                        image = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500'
                        name = 'Hannah Blaze'
                        countryFlag = 'https://cdn.pixabay.com/photo/2017/02/06/15/09/america-flag-2043285__340.png'
                        countryName = 'USA'
                        note = 'The bot service is top notch and it is absolutely free. No tax token needed during setup.'
                    />
                    <Testimony
                        image = 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500'
                        name = 'Adam Collinson'
                        countryFlag = 'https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898__340.jpg'
                        countryName = 'UK'
                        note = "I love the bot because it is free, you don't have to pay any fee before you can use it."
                    />
                    <Testimony
                        image = 'https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500'
                        name = 'Ajay Tahsin'
                        countryFlag = 'https://images.unsplash.com/photo-1597058712635-3182d1eacc1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
                        countryName = 'India'
                        note = 'This is a trading bot that you can easily setup by yourself, there is no need to engage a dev.'
                    />
                </div>
            </div>
        </section>
    )
}

function Testimony(props){
    return(
        <div data-aos="flip-up" className="testimony-wrapper width-100" id="testimonial">
            <div className="testimony-header">
                <div className="testimony-picture--wrapper">
                    <img 
                        className="testimony-picture" 
                        alt="testimony"
                        src={props.image}
                        width='50px'
                    />
                </div>
                <div>
                    <p className="testimony-name">{props.name}</p>
                    <div className="testimony-Country">
                        <img 
                            className="testimony-countryFlag" 
                            alt="testimony"
                            src={props.countryFlag}
                            width='20px'
                        />
                        <span className="testimony-countryName">{props.countryName}</span>
                    </div>
                </div>
            </div>
            <p className="testimony-note">{props.note}</p>
        </div>
    )
}