import React from 'react';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';
import Head from 'next/head';
import StyledColumn from '../components/StyledColumn';
import StyledRow from '../components/StyledRow';
import BackgroundSection from '../components/BackgroundSection';
import StyledH1 from '../components/StyledHeadings';

const lang = {
    "title" : "Programming Languages",
    "items" : [
        "Scala",
        "Python",
        "Javascript",
        "TypeScript",
        "C",
        "C++",
        "Java"
    ]
}
const cs = {
    "title" : "Computer Science Topics",
    "items" : [
        "Concurrency / Synchronization (Sempaphores & mutexes)",
        "Object-Orientated Techniques",
        "Pointers / Pointer arithmetic",
        "Memory Allocation / Management",
    ]
}
const math = {
    "title" : "Math Skills",
    "items" : [
        "Calculus",
        "Linear Algebra",
        "Probability Theory"
    ]
}
const web = {
    "title" : "Web Technologies",
    "items" : [
        "HTML",
        "CSS",
        "Responsive Design",
        "Form Validation",
        "BootStrap",
        "React",
        "Django (Python)",
        "Web Sockets",
        "API Usage",
        "Node JS",
        "HTTP Requests",
        "Ajax",
    ]
}
const db = {
    "title" : "Relational Databases",
    "items" : [
        "MySQL",
        "Postgresql",
    ]
}
const Skills : React.FunctionComponent<{}> = () => {
    return (
        <Layout page="skills">
            <Head>
                <title>Cutlip Development Skills</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
                <BackgroundSection bg="#0086c3">
                <StyledH1 bg="#73e8ff" border="true">Skills</StyledH1>
                <StyledRow>
                    <StyledColumn>
                        <MyCard header={lang.title} items={lang.items} headBg="#29b6f6" />
                    </StyledColumn>
                    <StyledColumn>
                        <MyCard header={web.title} items={web.items} headBg="#29b6f6" />
                    </StyledColumn>
                    <StyledColumn>
                        <MyCard header={cs.title} items={cs.items} headBg="#29b6f6" />
                    </StyledColumn>
                    <StyledColumn>
                        <MyCard header={db.title} items={db.items} headBg="#29b6f6" />
                    </StyledColumn>
                    <StyledColumn>
                        <MyCard header={math.title} items={math.items} headBg="#29b6f6" />
                    </StyledColumn>
                </StyledRow>
                </BackgroundSection>
        </Layout>
    )
}

export default Skills;