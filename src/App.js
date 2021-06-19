import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import ScrollToTop from './components/ScrollToTop';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Contact" exact component={Contact}/>
      </Switch>
    </Router> 
    </>
  );
}
export default App;
