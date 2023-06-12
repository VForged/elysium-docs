import React from 'react'
import Logo from '../../../static/images/logo.png'
import SearchIcon from '../../../static/images/Search.png'
import {ReactComponent as Eventicon} from '../../../static/images/icon-events.svg'
import {InputGroup, InputGroupText, Input} from 'reactstrap'
// import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
// import {InstantSearch} from "react-instantsearch-dom";


// const typesenseInstantSearchAdapter = new TypesenseInstantsearchAdapter({
//     server: {
//         apiKey: '',
//         nodes: [],
//     }
// });
export default function SearchSection() {

    return (
        <>
            <section className={'searchSectoin clients'}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 mx-auto d-flex flex-column">
                            <h2 className={'RadialGradient top-minus text-capitalize  text-center Fsize_48 ArchivoLight pb-3 text-shadow'}>Elysium <span
                                className={"ArchivoBold"}>Documentation</span></h2>
                            <p className={'pb-3 ArchivoExtraLight'}>Elysium documentation includes conceptual, procedural, and reference
                                information for blockchain builders and parachain project teams</p>
                            <button className="btn-docs-primary mx-auto">SEARCH DOCUMENTATION</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}