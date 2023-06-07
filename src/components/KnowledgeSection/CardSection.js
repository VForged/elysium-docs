import React from 'react';
import Logo from '../../../static/images/Footer Group 2.png'
import Cards from '../KnowledgeCard/KnowledgeCard'
import KN1 from '../../../static/images/kn-1-card.png'
import KN2 from '../../../static/images/kn-2-card.png'
import KN3 from '../../../static/images/kn-3-card.png'
import KN4 from '../../../static/images/kn-4-card.png'
import KN6 from '../../../static/images/kn-6-card.png'
import KN7 from '../../../static/images/kn-7-card.png'
import KN8 from '../../../static/images/kn-8-card.png'
export default function CardSection(){
    const data=[
        {
            image:KN1,
            title:'Get Started',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN2,
            title:'MyForge',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN3,
            title:'PYR Token',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN4,
            title:'Vulcanverse Game',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN4,
            title:'Forged Arena Game',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN6,
            title:'Buying',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN7,
            title:'Block Babies Game',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
        {
            image:KN8,
            title:'Selling',
            description:'Lorem ipsum dolor sit amet consetetur sadipscing',
        },
    ]

    return(
        <>
            <section className="KnowledgeSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6 mx-auto">
                                    <h2 className={'RadialGradient top-minus text-capitalize text-white text-center Fsize_48 ArchivoLight pb-3 text-shadow'}>Knowledge  <span className={"ArchivoBold"}>Base</span></h2>
                                </div>
                            </div>
                        </div>

                        {
                            data.map((data,i)=>{
                                return (
                                    <div className="col-3 mb-4">
                                        <Cards image={data.image} title={data.title} description={data.description}/>
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