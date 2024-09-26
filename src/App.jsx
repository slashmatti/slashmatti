import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Socials from './components/Socials';


function App() {
  return (
    <div className="App">
      <Header />
      <Socials />
      <Projects />
      <Blog />
      <About />
    </div>
  )
}

export default App
