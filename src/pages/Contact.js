import React from 'react';
import ContactForm from '../components/ContactForm'
import Social from '../components/Social'
import { Container } from 'react-bootstrap';

function Contact() {
    return (
        <Container fluid="md">
            <h1>Contact Me</h1>
            <h2>Social Media</h2>
            <Social/>
            <ContactForm/>
        </Container>
    )
}

export default Contact;