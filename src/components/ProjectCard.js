import React from 'react';
import { Card } from 'react-bootstrap';

function ProjectCard(props) {
    const plat = props.plat;
    let sub;
    if (plat) {
        sub =  <Card.Subtitle>
        Platform: {props.plat}
    </Card.Subtitle>
    }
    return (
        <Card>
            <Card.Header as="h3">{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>
                   Language(s): {props.lang}
                </Card.Title>
                {sub}
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;