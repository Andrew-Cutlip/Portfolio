import React from 'react';
import { Button } from 'react-bootstrap';
import LabeledInput from './LabeledInput';
import LabeledTextArea from './LabeledTextArea';
import StyledRow from '../components/StyledRow';
import StyledColumn from '../components/StyledColumn';
import StyledForm from '../components/StyledForm';

const ContactForm =(props) => {
    return (
    <StyledForm action="/service-form" method="post" bg={props.bg} >
        <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
        <StyledRow>
            <StyledColumn>
                <LabeledInput name="First Name" placeholder="First Name" type="text" required={true} id="first_name" />
            </StyledColumn>
            <StyledColumn>
                <LabeledInput name="Last Name" placeholder="Last Name" type="text" required={true} id="last_name" />
            </StyledColumn>
        </StyledRow>
        <StyledRow>
            <StyledColumn>
                <LabeledInput name="Email Address" placeholder="name@example.com" type="email" required={true} id="email" />
            </StyledColumn>
            <StyledColumn>
                <LabeledInput name="Phone Number" placeholder="#" type="phone" required={true} id="phone" />
            </StyledColumn>
        </StyledRow>
        <LabeledTextArea name="Message" placeholder="Tell me how I can help you here" required={true} id="msg" />
        <Button className="sectionButton" variant="primary" type="submit" size="lg" >
            Submit
        </Button>
    </StyledForm>
    )
}

export default ContactForm;