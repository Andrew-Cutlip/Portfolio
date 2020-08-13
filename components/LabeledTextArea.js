import React from 'react';
import {StyledFieldSet, StyledLabel, StyledTextArea} from '../components/styles/Forms';

const LabeledTextArea = (props) => {
    let ask = null;
    if (props.required) {
        ask = <strong><abbr title="required">*</abbr></strong>
    }
    return (
        <StyledFieldSet controlId={props.id}>
            <StyledLabel htmlFor={props.id}>{props.name}</StyledLabel>
            {ask}
            <StyledTextArea id={props.id} placeholder={props.placeholder} required={props.required} name={props.id} />
        </StyledFieldSet>
    )
}

export default LabeledTextArea;