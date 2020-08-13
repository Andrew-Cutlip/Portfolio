import styled from 'styled-components';

const StyledListItem = styled.li`
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
`

const StyledList =styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 0;
    border-radius: .25rem;
`

const MyList = (props) => {
    let items = [];
    if (props.items) {
        items = props.items.map((item, index) => {
            return <StyledListItem key={index}>{item}</StyledListItem>
        })
    }
    return (
        <StyledList>
            {items}
            {props.children}
        </StyledList>
    )
}

export default MyList;