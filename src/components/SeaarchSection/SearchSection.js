import React from 'react'
import Logo from '../../../static/images/logo.png'
import SearchIcon from '../../../static/images/Search.png'
import {ReactComponent as Eventicon} from '../../../static/images/icon-events.svg'
import {InputGroup,InputGroupText,Input} from 'reactstrap'
export default function SearchSection(){

    return(
        <>
            <section className={'searchSectoin clients'}>
                <div className="container">
                    <div className="row">
                        <div className="col-5 mx-auto">
                            <h2 className={'RadialGradient top-minus text-capitalize text-white text-center Fsize_48 ArchivoLight pb-3 text-shadow'}>Elysium <span className={"ArchivoBold"}>Documentation</span></h2>
                            <p className={'pb-3'}>Elysium documentation includes conceptual, procedural, and reference information for blockchain builders and parachain project teams</p>
                        </div>
                        <div className="col-8 mx-auto">
                            <InputGroup>
                                <InputGroupText>
                                    <img src={SearchIcon} />
                                </InputGroupText>
                                <Input placeholder="and..." />
                                <button className={'btn BtnGreen'}>Search</button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}