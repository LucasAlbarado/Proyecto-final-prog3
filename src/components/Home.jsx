import React from 'react';
import './Home.css';
import Barralateral from "./Barralateral"
import Navbar from "./Navbar"

function Home() {
  return (
    <div className="grid-container">
      <header className="header p-1">
      <Navbar/>
      </header>
      <nav className="menu">Menú</nav>
      <main className="content">Contenido</main>
      <aside className="sidebar">Barra Lateral
        <Barralateral/>
      </aside>
      <footer className="footer">Pie de Página</footer>
    </div>
  );
}

export default Home;