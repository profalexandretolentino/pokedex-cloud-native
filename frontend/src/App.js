import React from 'react';
import './App.css'; // Importando o estilo que criamos

function App() {
  return (
    <div className="pokedex-container">
      <h1>Pokédex Cloud-Native</h1>
      <p>Project International 2026 | Status: Online</p>
      
      <div className="pokedex-screen">
        <div className="pokedex-text">
          <h2>SYSTEM INITIALIZED</h2>
          <p>Ready to search Pokémon...</p>
        </div>
      </div>
    </div>
  );
}

export default App;