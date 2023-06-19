import React from 'react';
import Logo from '../../../static/images/Footer Group 2.png'
import Cards from '../Cards/Card'
import Rocket from '../../../static/images/card-rocket.png'
import Community from '../../../static/images/card-community.png'
import Refrence from '../../../static/images/card-refrence.png'

export default function CardSection() {
    const data = [
        {
            image: Refrence,
            title: 'Building on Elysium',
            description: 'Learn how to build a new application or deploy existing Solidity smart contracts to Elysium.',
            list: [
                "How to get your own API endpoint for Elysium-based networks",
                "How to use Ethereum tools to send transactions & deploy contracts",
                // "Learn More",
            ],
            links: [
                'docs/networks/elysium-chain',
                'docs/etherum-vs-elysium/balance-transfer',
                'docs/intro',
            ]
        },
        {
            image: Community,
            title: 'Operating a Node',
            description: 'Everything you need to know about running a node on Elysium, how to become a collator, and more.',
            list: [
                "How to set up a Elysium-based node",
                "Learn about the collator requirements and how to spin up a collator node",
                // "Learn More",
            ],
            links: [
                'docs/validator-node#how-to-become-a-elysium-validator',
                'docs/validator-node#the-easiest-way-using-docker',
                'feeeas',
            ]
        },
        {
            image: Rocket,
            title: 'Learning About Elysium',
            description: 'Dive into the Elysium and learn what makes this approach to Ethereum compatability so compelling.',
            list: [
                "Elysium network overview",
                // "Explore the DApp directory",
                // "Learn More"
            ],
            links: [
                'docs/category/networks',
            ]
        },
    ]

    return (
        <>
            <section className="cardsection">
                <div className="container">
                    <div className="row">
                        {
                            data.map((data, i) => {
                                return (
                                    <div className="col-4">
                                        <Cards image={data.image} title={data.title} description={data.description}
                                               list={data.list} href={data.links}/>
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