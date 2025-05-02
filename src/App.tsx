// src/App.tsx

import Header from './components/Header/Header';
import About from './sections/About';
import Blog from './sections/Blog';
import Career from './sections/Career';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';

function App() {
  
  return (
    <div className="bg-[#f9f9f9] min-h-screen w-full">
      <Header />
      <About />
      <TechStack />
      <Projects />
      <Blog/>
      <Career/>
      <Contact/>
    </div>
  );
}

export default App;
