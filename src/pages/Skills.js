import React from 'react';
import StringList from '../components/StringList';
import { Container } from 'react-bootstrap';

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
function Skills() {
    return (
        <Container fluid="md">
            <h1>Skills</h1>
            <StringList title={lang.title} items={lang.items}/>
            <StringList title={web.title} items={web.items}/>
            <StringList title={cs.title} items={cs.items}/>
            <StringList title={db.title} items={db.items}/>
            <StringList title={math.title} items={math.items}/>
        </Container>
    )
}

export default Skills;