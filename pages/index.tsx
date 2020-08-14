import React from 'react';
import StyledImage from '../components/StyledImage';
import Link from 'next/link'
import StyledSectionButton from '../components/StyledSectionButton';
import ButtonContainer from '../components/ButtonContainer';
import StyledJumbo from '../components/StyledJumbo';
import Head from 'next/head';
import Layout from '../components/Layout';
import TextBox from '../components/TextBox';

const Home: React.FunctionComponent<{}> = () => {
    const welcome = [
        "I am a developer that could work for you.",
        "I am a computer science student that wants to learn and but his skills to use.",
        "Feel free to learn more about me or look at my portfolio and skills to see what I can do for you.",
        "If you like what you see and want my help feel free to contact me",
    ]
    return (
        <Layout page="home">
            <Head>
                <title>Cutlip Development</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <main>
        <StyledImage src="/images/cover.png" alt="Cover Logo" width="90%" />
        <StyledJumbo>
        <TextBox title="Hi I'm Andrew Cutlip" text={welcome} bg="white"/>
        <ButtonContainer hor="true">
            <Link href="/contact#service">
               <StyledSectionButton>Need a Developer?</StyledSectionButton>
            </Link>
            <Link href="/contact#hire">
               <StyledSectionButton>Hire Me</StyledSectionButton>
            </Link>
        </ButtonContainer>
        </StyledJumbo>
        </main>
        </Layout>
    )
}

export default Home;