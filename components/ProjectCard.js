import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

function ProjectCard(props) {
    const plat = props.plat;
    let header = null;
    let cardBody = null;
    let sub;
    if (plat) {
        sub =  <Card.Subtitle>
        Platform: {props.plat}
    </Card.Subtitle>
    }

    let body = <Card.Body>
    <Card.Title>
       Language(s): {props.lang}
    </Card.Title>
    {sub}
    <Card.Text>
        {props.text}
    </Card.Text>
</Card.Body>

    if (props.event) {
        header = <Accordion.Toggle as={Card.Header} className={props.cName} eventKey={props.event}>
            <h3>{props.title}</h3></Accordion.Toggle>
        cardBody = <Accordion.Collapse eventKey={props.event} >
            {body}
        </Accordion.Collapse>
    }
    else {
        header = <Card.Header className={props.cName} as="h3">{props.title}</Card.Header>
        cardBody = body;
    }
    return (
        <Card>
            {header}
            {cardBody}
        </Card>
    )
}

export default ProjectCard;