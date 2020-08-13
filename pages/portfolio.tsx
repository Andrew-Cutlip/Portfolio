import React from 'react';
import Layout from '../components/Layout';
import MyCard from '../components/MyCard';
import StyledContainer from '../components/StyledContainer';
import Head from 'next/head';
import StyledH1 from '../components/StyledHeadings';
import Carousel from '../components/Carousel';

const bill = {
    "title" : "Bill Splitter",
    "lang" : "Java, XML",
    "text" : "Basic bill splitter app that calculates how much each person should pay for a bill including tip options.",
    "plat" : "Android",
    "key" : 0,
}

const shunt = {
    "title" : "Shunting Yard algorithm Implementation",
    "lang" : "Scala",
    "text" : "Takes an expression as a string in infix notation and converts it to reverse polish notation then evaluates it.",
    "key" : 1,
}

const phys = {
    "title" : "Physics Engine",
    "lang" : "Scala",
    "text" :  "Uses object-orientated programming to create a physics engine that models movement and collisions that could workin a simple game.",
    "key" : 2,
}

const calc = {
    "title" : "Calculator",
    "lang" : "Scala",
    "plat" : "GUI",
    "text" :  "Uses a GUI and state design pattern to make a simple calculator that doesn't use any control flow. Reacts to button presses to perform arithmetic.",
    "key" : 3,
}

const click = {
    "title" : "Clicker",
    "lang" : "Scala",
    "plat" : "GUI",
    "text" :  "A simple clicker game create with a gui, akka actors, and websockets to allow different instances of desktop/webapps to a server that responds to events. It stores user info in a SQL database",
    "key" : 4,
}

const gene = {
    "title" : "Genetic Algorithm",
    "lang" : "Scala",
    "text" :   "Implements a generic genetic algorithm that can solve problems such as linear/polynomial regression. It generates random solutions, sorts them by how fit they are, keeps the best ones letting them redproduce with some randomness, all until a solution close to ideal is produced.",
    "key" : 5,
}

const schoolList = [
    shunt,
    phys,
    calc,
    click,
    gene,
]

const schools = schoolList.map((school) =>
    <MyCard header={school.title} title={school.lang} text={school.text} event={school.key} key={school.key} headBg="#29b6f6" />
)

const Portfolio: React.FunctionComponent<{}> = () => {
    return (
        <Layout page="portfolio">
            <Head>
                <title>Cutlip Development Portfolio</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        <StyledContainer>
            <StyledH1 border="true" bg="#73e8ff">Portfolio</StyledH1>

            <h2>Personal Projects</h2>
            <MyCard header={bill.title} title={bill.lang} text={bill.text} subtitle={bill.plat} headBg="#29b6f6" />

            <h2>School Projects</h2>
            <Carousel items={schools} />
        </StyledContainer>
        </Layout>
    )
}

export default Portfolio;