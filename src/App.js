import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import States from './components/pages/States';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Districts from './components/pages/Districts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/states' component={States} />
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/districts' component={Districts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
