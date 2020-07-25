import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/home/Home';
import Menu from './components/menu/menu';
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Partners from './components/partners/partners'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'


function App() {
  return (
    <Router>
      <Home/>
      <Menu/>
      <About/>
      <Portfolio/>
      <Partners/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
