import React from 'react';
import ContactForm from '../components/ContactForm';
import Social from '../components/Social';
import LabelInfo from '../components/LabelInfo';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';
import Head from 'next/head';
import StyledRow from '../components/StyledRow';
import StyledColumn from '../components/StyledColumn';
import BackgroundSection from '../components/BackgroundSection';
import StyledContainer from '../components/StyledContainer';
import StyledH1, {StyledH2} from '../components/StyledHeadings';

const Contact: React.FunctionComponent<{}> = (props) => {
    const contact = [
        <LabelInfo label="Email Address:" info="andrewcutlip@cutlipdevelopment.com" key="0" />,
        <a href="mailto:andrewcutlip@cutlipdevelopment.com" target="_blank" key="1">Send Me an Email</a>
    ]
    return (
        <Layout page="contact">
            <Head>
                <title>Cutlip Development Contact Me</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <BackgroundSection bg="#29b6f6" >
            <StyledH1 bg="#73e8ff">Contact Me</StyledH1>
        <StyledRow>
            <StyledColumn>
                <MyCard header="Contact Info" body={contact} headBg="#0086c3" bodyBg="white" />
            </StyledColumn>
            <StyledColumn>
                <StyledH2 border="true" bg="#0086c3">Social Media</StyledH2>
                <Social/>
            </StyledColumn>
        </StyledRow>
        </BackgroundSection>
        <BackgroundSection bg="#0086c3">
            <h2 id="service">Request my services</h2>
            <StyledContainer>
                <ContactForm bg="white" />
            </StyledContainer>
            <h2 id="hire">Hire Me</h2>
        </BackgroundSection>
        </Layout>
    )
}

export default Contact;