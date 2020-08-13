import styled from 'styled-components';

const StyledContainer = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align : center;

    background-color : ${(props) => props.bg};

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

export default StyledContainer;