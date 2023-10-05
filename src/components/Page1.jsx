import React from 'react';
import PokemonList from './PokemonList';
import { Link } from 'react-router-dom'; // Import Link

function Page1() {
  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>Kelompok 21</h1>
      <h2>Halaman Pertama (1-10)</h2>
      </div>
      <PokemonList />
      {/* Tambahkan tombol "Next" yang mengarahkan ke Page2 */}
      <Link to="/page2">
        <div style={{textAlign:"center"}}>
        <button>Next</button>
        </div>
      </Link>
    </div>
  );
}

export default Page1;
