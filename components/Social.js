import React from 'react';
import ButtonList from './ButtonList';
import MyContainer from '../components/StyledContainer';
import StyledSocialButton from '../components/StyledSocialButton';

const Social = () => {
    return (
        <MyContainer>
        <ButtonList hor="true">
            <StyledSocialButton href="https://github.com/Andrew-Cutlip">
                Github
            </StyledSocialButton>
            <StyledSocialButton href="https://www.linkedin.com/in/andrew-cutlip-3322b917a/">
                Linkedin
            </StyledSocialButton>
            <StyledSocialButton href="https://twitter.com/CutlipDev">
                Twitter
            </StyledSocialButton>
        </ButtonList>
        </MyContainer>
    )
}

export default Social;