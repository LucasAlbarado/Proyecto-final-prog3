import React from 'react';
import './Home.css';
import Barralateral from "./Barralateral"
import Navbar from "./Navbar"
import Footer from "./Footer"


function Home() {
  return (
    <div className="grid-container">
      <header className="header p-1">
      <Navbar fixed="top"/>
      </header>
      <nav className="menu">Menú</nav>
      <main className="content">Contenido</main>
      <aside className="sidebar">
        <Barralateral/>
      </aside>
      <footer className="footer p-1">
      <Footer fixed="bottom"/>
      </footer>
    </div>
  );
}

export default Home;