import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonListProvider } from './components/PokemonList';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <Router>
      <PokemonListProvider offset={0}> {/* Instance pertama untuk halaman Page1 */}
        <Routes>
          <Route path="/" element={<Page1 />} />
        </Routes>
      </PokemonListProvider>

      <PokemonListProvider offset={10}> {/* Instance kedua untuk halaman Page2 */}
        <Routes>
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </PokemonListProvider>
    </Router>
  );
}

export default App;
