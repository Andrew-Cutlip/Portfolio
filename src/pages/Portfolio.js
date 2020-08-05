import React from 'react';
import { Container, CardDeck } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

const bill = {
    "title" : "Bill Splitter",
    "lang" : "Java, XML",
    "text" : "Basic bill splitter app that calculates how much each person should pay for a bill including tip options.",
    "plat" : "Android",
}

const shunt = {
    "title" : "Shunting Yard algorithm Implementation",
    "lang" : "Scala",
    "text" : "Takes an expression as a string in infix notation and converts it to reverse polish notation then evaluates it.",
}

const phys = {
    "title" : "Physics Engine",
    "lang" : "Scala",
    "text" :  "Uses object-orientated programming to create a physics engine that models movement and collisions that could workin a simple game.",
}

const calc = {
    "title" : "Calculator",
    "lang" : "Scala",
    "plat" : "GUI",
    "text" :  "Uses a GUI and state design pattern to make a simple calculator that doesn't use any control flow. Reacts to button presses to perform arithmetic.",
}

const click = {
    "title" : "Clicker",
    "lang" : "Scala",
    "plat" : "GUI",
    "text" :  "A simple clicker game create with a gui, akka actors, and websockets to allow different instances of desktop/webapps to a server that responds to events. It stores user info in a SQL database",
}

const gene = {
    "title" : "Genetic Algorithm",
    "lang" : "Scala",
    "text" :   "Implements a generic genetic algorithm that can solve problems such as linear/polynomial regression. It generates random solutions, sorts them by how fit they are, keeps the best ones letting them redproduce with some randomness, all until a solution close to ideal is produced.",
}

const schoolList = [
    shunt,
    phys,
    calc,
    click,
    gene,
]

const schools = schoolList.map((school) =>
    <ProjectCard title={school.title} lang={school.lang} text={school.text}/>
)

function Portfolio() {
    return (
        <Container fluid="md">
            <h1>Portfolio</h1>

            <h2>Personal Projects</h2>
            <CardDeck>
            <ProjectCard title={bill.title} lang={bill.lang} text={bill.text} plat={bill.plat} />
            </CardDeck>

            <h2>School Projects</h2>
            <CardDeck>
                {schools}
            </CardDeck>
        </Container>
    )
}

export default Portfolio;