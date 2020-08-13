import React from 'react';
import MyContainer from './StyledContainer';

const LabelInfo = (props) => {
    return (
       <MyContainer>
           <p>{props.label}</p>
            <p>{props.info}</p>
       </MyContainer>
    )
}

export default LabelInfo;