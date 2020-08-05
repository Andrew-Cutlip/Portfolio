import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <main className="main">
        <Router>
        <Header></Header>
        <Switch>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/portfolio">
          <Portfolio/>
        </Route>

        <Route path="/skills">
          <Skills/>
        </Route>


          <Route path="/contact">
            <Contact/>
          </Route>

        <Route path="/home">
            <Home/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

        </Switch>
        </Router>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
