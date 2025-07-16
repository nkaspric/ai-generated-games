import './App.css';

function App() {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="./ressources/logo.jpg" alt="AIGenLogoSmall" />
          <span className="site-title">AI Generated Games</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#" className="active">Accueil</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">A propos</a></li>
        </ul>
      </nav>
      <main className="main-content">
        <img src="./ressources/logo.jpg" alt="AIGenLogo" className="main-logo"/>
        <h1>Bienvenue sur AI Generated Games</h1>
        <p className="description">
          Découvrez une collection de mini jeux vidéo générés par intelligence artificielle.<br/>
          Amusez-vous, défiez vos amis et explorez de nouveaux jeux chaque mois !
        </p>
      </main>
    </div>
  )
}

export default App
