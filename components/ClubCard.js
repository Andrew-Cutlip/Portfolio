import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import MyCard from './MyCard';

function ClubCard(props) {
    let key = props.eKey;
    return (
        <MyCard title={props.title} text={props.text}>
            <Accordion.Toggle as={Card.Header} className="cardHeader" eventKey={key} >
                {props.title}
                </Accordion.Toggle>
        <Accordion.Collapse eventKey={key}>
            <Card.Body>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Accordion.Collapse>
        </MyCard>
    )
}

export default ClubCard;