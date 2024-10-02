import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
// import Blog from './components/Blog';
import About from './components/About';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App px-12 py-8 space-y-4 container max-w-fit mx-auto">
      <Header />
      <Nav />
      <Projects />
      <About />
      {/* <Blog /> */}
    </div>
  )
}

export default App
