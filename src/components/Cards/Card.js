import React from 'react';
import Link from '@docusaurus/Link';
import Logo from '../../../static/images/Footer Group 2.png'
import {
    InputGroup,
    InputGroupText,
    Input,
    CardBody,
    Card,
    CardSubtitle,
    CardLink,
    CardTitle,
    CardText
} from 'reactstrap'

export default function MyCard({image, title, description, list, href}) {
    return (
        <>

            <Card>
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

                            <li className={'mb-3'}><Link to={href[i]}> {link}</Link></li>
                            )

                        })}
                    </ul>
                </CardBody>
            </Card>

        </>
    )
}