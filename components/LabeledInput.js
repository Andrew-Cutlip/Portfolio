import React from 'react';
import {StyledLabel, StyledInput, StyledFieldSet } from '../components/styles/Forms';

const LabeledInput = (props) => {
    let ask = null;
    if (props.required) {
        ask = <strong><abbr title="required">*</abbr></strong>
    }
    return (
        <StyledFieldSet>
            <StyledLabel htmlFor={props.id}>{props.name}</StyledLabel>
            {ask}
            <StyledInput id={props.id} required={props.required} type={props.type} placeholder={props.placeholder} name={props.id} />
        </StyledFieldSet>
    )
}

export default LabeledInput;