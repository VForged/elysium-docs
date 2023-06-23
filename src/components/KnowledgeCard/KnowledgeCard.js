import React from 'react';
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

export default function KnowledgeCard({image, title, description}) {
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
                    {/*<CardText>*/}
                    {/*    {description}*/}
                    {/*</CardText>*/}
                </CardBody>
            </Card>
        </>
    )
}