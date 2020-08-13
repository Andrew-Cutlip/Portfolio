import React from 'react';
import { Accordion} from 'react-bootstrap';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';
import StyledContainer from '../components/StyledContainer';
import MyList from '../components/MyList';
import Head from 'next/head';
import TextBox from '../components/TextBox';
import StyledRow from '../components/StyledRow';
import StyledColumn from '../components/StyledColumn';
import BackgroundSection from '../components/BackgroundSection';
import {StyledH2} from '../components/StyledHeadings';
import StyledH1 from '../components/StyledHeadings';

const About: React.FunctionComponent<{}> = () => {
    const ed = [
        "2019-2021"
    ]
    const ed2 = [
        "2017-2019"
    ]

    const about = ` My name is Andrew Cutlip.
        I am a junior studying Computer Science at SUNY University at Buffalo.
        After my Bachelor's degree I hope to get my Master's degree in Computer Science as well.
        I hope to have an internship this summer to gain more practical experience.
        I also am open to offering my services online to anyone requesting them.
    `

    return (
        <Layout page="about">
            <Head>
                <title>Cutlip Development About Me</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <StyledH1 border="true" bg="#73e8ff">About Me</StyledH1>
            <StyledContainer>
                <TextBox p={about} bg="#0086c3" bodyBg="white" border="true" />
            </StyledContainer>
            <BackgroundSection bg="#0086c3">
            <StyledRow>
                <StyledColumn>
                    <MyList>
                        <StyledH2 border="true">Education</StyledH2>
                        <MyCard title="SUNY University at Buffalo" subtitle="B.S. Computer Science" text={ed} headBg="#29b6f6" bodyBg="white" />
                        <MyCard title="SUNY Niagara County Community College" text={ed2} headBg="#29b6f6" bodyBg="white" />
                    </MyList>
                </StyledColumn>
                <StyledColumn>
                    <StyledH2 border="true">Clubs</StyledH2>
                <Accordion defaultActiveKey="0">
                    <MyCard header="IEEE" text="Micromouse competition to build and program a robot to navigate a maze." headBg="#29b6f6" bodyBg="white" />

                    <MyCard header="Invenst" text="Club for technology entrepreneurship that works with startups in the buffalo area." headBg="#29b6f6" bodyBg="white" />

                    <MyCard header="UB ACM (Association of Computing Machinery)" eKey="2" text="Holds various skill / technology workshops and yearly UB hacking hackathon." headBg="#29b6f6" bodyBg="white" />
                    </Accordion>
                </StyledColumn>
            </StyledRow>
            </BackgroundSection>
        </Layout>
    )
}

export default About;