import React, {useState} from 'react';
import LabeledInput from './LabeledInput';
import LabeledTextArea from './LabeledTextArea';
import StyledRow from '../components/StyledRow';
import StyledColumn from '../components/StyledColumn';
import StyledForm from '../components/StyledForm';
import SubmitButton from '../components/SubmitButton';



const ContactForm =(props) => {

    let [firstName, setFirstName] = useState('FirstName');
    let [lastName, setLastName] = useState('LastName');
    let [email, setEmail] = useState('Email');
    let [phone, setPhone] = useState('Phone');
    let [message, setMessage] = useState('msg');

    const submitForm = (e) => {
        e.preventDefault();
        fetch('/api/contact', {
            method : 'post',
            headers: {
                'Accept' : 'application/json, text/plain */*',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                firstName : firstName,
                lastName : lastName,
                email : email,
                phone : phone,
                message : message,
            })
        }).then((res) => {
            console.log(res);
        })
    }

    return (
    <StyledForm bg={props.bg}  >
        <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
        <StyledRow>
            <StyledColumn>
                <LabeledInput name="First Name" placeholder="First Name" type="text" required={true} id="first_name" onChange={e => setFirstName(e.target.value)} />
            </StyledColumn>
            <StyledColumn>
                <LabeledInput name="Last Name" placeholder="Last Name" type="text" required={true} id="last_name" onChange={e => setLastName(e.target.value)} />
            </StyledColumn>
        </StyledRow>
        <StyledRow>
            <StyledColumn>
                <LabeledInput name="Email Address" placeholder="name@example.com" type="email" required={true} id="email" onChange={e => setEmail(e.target.value)} />
            </StyledColumn>
            <StyledColumn>
                <LabeledInput name="Phone Number" placeholder="#" type="phone" required={true} id="phone" onChange={e => setPhone(e.target.value)} />
            </StyledColumn>
        </StyledRow>
        <LabeledTextArea name="Message" placeholder="Tell me how I can help you here" required={true} id="msg" onChange={e => setMessage(e.target.value)} />
        <SubmitButton onClick={submitForm} />
    </StyledForm>
    )
}

export default ContactForm;