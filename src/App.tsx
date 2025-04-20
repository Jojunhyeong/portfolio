// src/App.tsx

import Header from './components/Header/Header';
import About from './sections/About';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen w-full">
      <Header />
      <About />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
