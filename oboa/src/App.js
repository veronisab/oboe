
import './App.css';
import Head from './Head';
import Contact from './Contact';
import About from './About';
import Video from './Video';
import React from 'react';
import Fade from 'react-reveal/Fade';

function App() {
  return (
      <div>
        <Head />
        <Fade><About /></Fade>
        <Fade><Video /></Fade>
        <Fade><Contact /></Fade>
      </div>
  );
}

export default App;
