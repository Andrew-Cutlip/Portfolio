import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components';

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    min-height : 100vh;
    position : relative;
`
const StyledContent = styled.div`
      flex: 1 0 auto;
`

const Layout: React.FunctionComponent<{children, page}> = ({page, children}) => {
    return (
        <StyledLayout>
            <StyledContent>
            <Header page={page} />
            {children}
            </StyledContent>
            <Footer />
        </StyledLayout>
    )
}

export default Layout;