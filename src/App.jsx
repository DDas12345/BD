// src/App.jsx
import React, { useEffect } from "react";
// Import the storage script so its side‑effects run (version toggle & team builder)
import "../storage.js";

const App = () => {
  useEffect(() => {
    // Any additional React‑specific initialization can go here.
    console.log("Pokémon BDSP React app mounted");
  }, []);

  return (
    <div className="app-container">
      {/* The original static HTML remains in index.html – this React app can be expanded later */}
      <h1 className="fade-in">Pokémon BDSP React Skeleton</h1>
      <p>This is a placeholder React component. Feel free to migrate existing markup into React components.</p>
    </div>
  );
};

export default App;
