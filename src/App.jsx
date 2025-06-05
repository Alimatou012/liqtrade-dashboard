import React, { useState } from 'react'; 
import './App.css'; 
import Dashboard from './Dashboard.jsx'; 
import captureImage from './assets/images/capture.png';
import logo from './assets/images/logo.png';
import icone1 from './assets/icones/icone1.png';
import icone2 from './assets/icones/icone2.png';
import icone3 from './assets/icones/icone3.png';
import icone4 from './assets/icones/icone4.png';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="top-bar"></div>
      <header className="main-header">
        <div className="header-left">
         <img src={logo} alt="Liqtrade Logo" className="h-3" />
          <nav className="header-nav">
            <a href="#">Prêt</a>
            <a href="#">Affacturage</a>
          </nav>
        </div>

        <div className="header-links">
          <a href="#">Simulateur</a>
          <a href="#">Contact</a>
          <a href="#">Publications</a>
          <a href="#" className="btn-green-light">S’inscrire</a>
          <a href="#" className="btn-green-dark">Se connecter </a>
        </div>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-subtitle">
            Financement professionnel à court terme.
          </p>
          <h2 className="hero-title">
            Notre intérêt,<br />c’est le vôtre.
          </h2>
          <p className="hero-description">
            Simple, efficace et rapide. Profitez du service Liqtrade<br />
            sans garantie personnelle.
          </p>
          <div className="hero-buttons-wrapper">
            <a href="#" className="btn-green-dark">Se connecter</a>
            <a href="#" className="btn-green-light">S’inscrire →</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={captureImage} alt="Liqtrade application" className="hero-image" />
        </div>
      </section>
      <section className="gray-section">
        <div className="container gray-content-wrapper">
          <div className="gray-left-nav">
            <h4>Prêts →</h4>
            <p>Affacturage →</p>
          </div>
          <div className="gray-right-content">
            <p>Des taux compétitifs en quelques clics. <br /> Quel que soit votre projet, nous vous accompagnons de manière bienveillante avec les meilleurs <br /> outils en ligne. Oubliez le parcours du combattant, à vous le financement professionnel à court terme. <br /></p>
            <p>Chez Liqtrade nous vous aidons à évoluer à travers des solutions de financement simples, <br />efficaces et compétitives en seulement quelques clics.</p>
            <p className="">TPE/PME, comptez sur nous pour vous aider à :</p>
            <ul>
              <li>Refinancer son entreprise</li>
              <li>Ouvrir une nouvelle agence</li>
              <li>Faire connaître son entreprise</li>
              <li>Se lancer à l’international</li>
              <li>Digitaliser son entreprise</li>
              <li>Acquérir une entreprise</li>
              <li>Transformer son entreprise</li>
              <li>Financer des projets de développements durables</li>
            </ul>
            <button>Vidéo de présentation</button>
          </div>
        </div>
      </section>
      <section className="cards-section">
        <div className="card-item card-white">
          <img src={icone1} alt="" className="!w-[30px] !h-[30px] mr-2 inline-block"/>
          <h3 className="card-title">Évaluation du profil de risque de votre client</h3>
          <p className="card-description">Plus de mauvaises surprises lors de la facturation de votre client. Chez Liqtrade, nous évaluons son risque débiteur afin de permettre la valorisation et l’acceptation rapide de votre facture. Notre approche se base sur une analyse approfondie et une expertise du secteur pour vous proposer le meilleur prix de cession de votre créance.</p>
        </div>

        <div className="card-item card-white">
            <img src={icone2} alt="" className="!w-[40px] !h-[30px] mr-2 inline-block"/>
          <h3 className="card-title">Meilleur prix de cession de votre créance</h3>
          <p className="card-description">Nos algorithmes trouvent pour vous la meilleure offre de financement en termes de prix et de taux de commission. En moyenne, nos clients perçoivent jusqu’à 97 % de la valeur nominale de leur facture.</p>
        </div>

        <div className="card-item card-white">
            <img src={icone3} alt="" className="!w-[30px] !h-[30px] mr-2 inline-block"/>
          <h3 className="card-title">Paiement en un temps record pour vos factures</h3>
          <p className="card-description">Après validation et financement de votre facture, votre paiement est transféré en seulement quelques minutes. Grâce à notre plateforme de paiement, bénéficiez de nouvelles fonctionnalités de paiement instantané. Vous permettant un virement rapide vers la banque de votre choix.</p>
        </div>

        <div className="card-item card-white">
            <img src={icone4} alt="" className="!w-[30px] !h-[30px] mr-2 inline-block"/>
          <h3 className="card-title">Financez vos besoins de trésorerie en temps réel</h3>
          <p className="card-description">Faites une demande de financement en ligne via l’envoi électronique de facture et obtenez plus rapidement vos fonds via un traitement automatisé. Vos factures sont valorisées, validées automatiquement et financées sur notre plateforme.</p>
        </div>
      </section>
      {isAuthenticated && <Dashboard />}
    </div>
  );
}

export default App;