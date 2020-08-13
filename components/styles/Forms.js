import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`

export {StyledLabel};

const StyledInput = styled.input`
    display: block;
    width: 100%;
    height : 2rem;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    margin : .5rem;
`
export {StyledInput};

const StyledFieldSet = styled.fieldset`
    margin-bottom: 1rem;
    display : block;
    padding : 3rem;
    justify-content : center;
`

export {StyledFieldSet};

const StyledTextArea = styled.textarea`
    height: auto;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    margin : 0;
`

export {StyledTextArea};