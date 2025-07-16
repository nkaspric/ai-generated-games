import { useState } from 'react';
import './App.css';
import AboutPage from './AboutPage';


function App() {
  const [page, setPage] = useState<'home' | 'about'>('home');

  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./ressources/logo.jpg" alt="AIGenLogoSmall" />
          <span className="site-title">AI Generated Games</span>
        </div>
        <ul className="navbar-links">
          <li>
            <a
              href="#"
              className={page === 'home' ? 'active' : ''}
              onClick={e => { e.preventDefault(); setPage('home'); }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={e => e.preventDefault()}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={page === 'about' ? 'active' : ''}
              onClick={e => { e.preventDefault(); setPage('about'); }}
            >
              A propos
            </a>
          </li>
        </ul>
      </nav>
      {page === 'home' ? (
        <main className="main-content">
          <img src="./ressources/logo.jpg" alt="AIGenLogo" className="main-logo"/>
          <h1>Bienvenue sur AI Generated Games</h1>
          <p className="description">
            Découvrez une collection de mini jeux vidéo générés par intelligence artificielle.<br/>
            Amusez-vous, défiez vos amis et explorez de nouveaux jeux chaque mois !
          </p>
        </main>
      ) : (
        <AboutPage />
      )}
    </div>
  );
}

export default App;
