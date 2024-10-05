import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
// import Blog from './components/Blog';
import About from './components/About';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App px-2 md:px-12 md:py-2 space-y-3 container max-w-[1360px] m-auto">
      <Header />
      <Nav />
      <Projects />
      <About />
      {/* <Blog /> */}
    </div>
  )
}

export default App
