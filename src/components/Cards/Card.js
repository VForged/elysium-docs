import React from 'react';
import Link from '@docusaurus/Link';
import Logo from '../../../static/images/Footer Group 2.png'
import {InputGroup,InputGroupText,Input,CardBody,Card,CardSubtitle,CardLink,CardTitle ,CardText} from 'reactstrap'
export default function MyCard({image,title,description,list}){
    return(
        <>

            <Card >
                <img
                    alt="Card cap"
                    src={image}
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <ul>
                    {list.map((link,i)=>{
                        return(

                            <li className={'mb-3'}><Link to={'docs/intro'}> {link}</Link></li>
                            )

                    })}
                    </ul>
                </CardBody>
            </Card>

        </>
    )
}