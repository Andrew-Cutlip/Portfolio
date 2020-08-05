import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function ContactForm() {
    return (
    <Form>
        <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  placeholder="Please enter email"/>
        </Form.Group>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First name" />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Last name" />
            </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    )
}

export default ContactForm;