import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import cover from '../images/cover.png';

function Home() {
    return (
        <main>
        <img src={cover} alt="Cover Logo" width="100%"></img>
        <Jumbotron>
        <h1>Hi I'm Andrew Cutlip</h1>
        <p>I am a developer that could work for you.</p>
        <p>I am a computer science student that wants to learn and but his skills to use.</p>
        <p>Feel free to learn more about me</p>
        <p>See some of the work I have done</p>
        <p>Or see what skills I can offer you</p>
        <p>If you like what you see then feel free to contact me</p>
        <Button variant="primary">Need a Developer</Button>
        <Button variant="primary">Hire Me</Button>
        </Jumbotron>
        </main>
    )
}

export default Home;