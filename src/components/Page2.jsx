import React, { useEffect } from 'react';
import PokemonList from './PokemonList';
import { Link } from 'react-router-dom'; // Import Link

function Page2() {
  return (
    <div>
      <div style={{textAlign:'center'}}>
      <h2>Halaman Kedua (11-20)</h2>
      </div>
      <PokemonList />
      {/* Tambahkan tombol "Kembali ke Halaman Pertama" yang mengarahkan ke Page1 */}
      <Link to="/">
        <div style={{textAlign:"center"}}>
        <button>Kembali ke Halaman Pertama</button>
        </div>
      </Link>
    </div>
  );
}

export default Page2;
