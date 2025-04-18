// src/App.tsx

import Header from './components/Header/Header';
import About from './sections/About';
import TechStack from './sections/TechStack';

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen w-full">
      <Header />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
