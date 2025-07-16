import './App.css';

function AboutPage() {
  return (
    <div className="main-content">
      <h1>À propos</h1>
      <p className="description left-align">
        Ce site a été réalisé avec les technologies suivantes :
        <ul>
          <li><b>React</b> 19 – pour la création d’interfaces dynamiques</li>
          <li><b>TypeScript</b> – pour la robustesse du typage</li>
          <li><b>Vite</b> – pour le développement rapide et le build optimisé</li>
          <li><b>CSS moderne</b> – pour un design responsive et élégant</li>
        </ul>
        <br/>
        Les jeux sont générés ou assistés par intelligence artificielle.<br/>
        Le code source est organisé pour faciliter l’ajout de nouveaux mini-jeux et l’évolution du site.
      </p>
    </div>
  );
}

export default AboutPage;