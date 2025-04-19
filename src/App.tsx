// src/App.tsx

import Header from './components/Header/Header';
import About from './sections/About';

function App() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen w-full">
      <Header />

      {/* 아래는 나중에 About, Skills, Projects 같은 섹션들 */}
      
        <About/>

    </div>
  );
}

export default App;
