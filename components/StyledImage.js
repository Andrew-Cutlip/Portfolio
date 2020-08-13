import styled from 'styled-components';

const StyledImage = styled.img`
    vertical-align : middle;
    width : 100%;
    background-color : ${(props) => props.bg};
    border : 1px solid black;

    @media only screen and (min-width: 600px) {
        width: 90%;
    }

    @media only screen and (min-width: 900px) {
        width: 80%;
    }

    @media only screen and (min-width: 1200px) {
        width : 75%;
        max-width: 1200px;
    }
`

export default StyledImage;