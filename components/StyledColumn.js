import styled from 'styled-components';

const StyledColumn = styled.div`
    padding-right: 5px;
    padding-left: 5px;
    flex-basis: 0;
    flex-grow: 1;
    min-width: 400px;
    max-width: 100%;
    width : 100%;
    margin-bottom : 1rem;
    display: block;

    @media only screen and (min-width: 600px) {
        width: 50%;
    }
    @media only screen and (min-width: 900px) {
        width: 30%;
    }
`

export default StyledColumn;