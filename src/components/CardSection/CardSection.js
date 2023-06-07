import React from 'react';
import Logo from '../../../static/images/Footer Group 2.png'
import Cards from '../Cards/Card'
import Rocket from '../../../static/images/card-rocket.png'
import Community from '../../../static/images/card-community.png'
import Refrence from '../../../static/images/card-refrence.png'
export default function CardSection(){
    const data=[
        {
            image:Rocket ,
            title:'Concepts',
            description:'Learn the fundamental concepts and terminology to start building your blockchain using the Elysium framework.',
            list:[
                "Build a local blockchain",
                "Build a local blockchain",
                "Build a local blockchain",
            ]
        } ,
        {
            image:Community,
            title:'Tutorials',
            description:'If you learn best by doing, start with the tutorials for first hand experience building your own blockchain from a template.',
            list:[
                "Build a local blockchain",
                "Simulate a network",
                "Build a local blockchain",
            ]
        }  ,
        {
            image:Refrence,
            title:'References',
            description:'For a deeper dive into the source code and how a blockchain built from core components written in Rust, explore the documentation.',
            list:[
                "Rust API",
                "Rust for Substrate",
                "Command-line tools",
            ]
        }
    ]

    return(
        <>
            <section className="cardsection">
                <div className="container">
                    <div className="row">
                        {
                            data.map((data,i)=>{
                                return (
                                    <div className="col-4">
                                        <Cards image={data.image} title={data.title} description={data.description} list={data.list}/>
                                    </div>
                                    )

                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}