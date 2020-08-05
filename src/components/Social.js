import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';


function Social() {
    return (
        <Container fluid="md">
        <ListGroup horizontal>
            <ListGroup.Item action href="https://github.com/Andrew-Cutlip">Github</ListGroup.Item>
            <ListGroup.Item action href="https://www.linkedin.com/in/andrew-cutlip-3322b917a/">Linkedin</ListGroup.Item>
            <ListGroup.Item action href="https://twitter.com/CutlipDev">Twitter</ListGroup.Item>
        </ListGroup>
        </Container>
    )
}

export default Social;