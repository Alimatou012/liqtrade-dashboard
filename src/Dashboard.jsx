import React from 'react';
import './Dashboard.css'; // Assurez-vous que ce chemin est correct

// Assurez-vous que ces chemins d'images sont corrects par rapport à votre dossier src
import admin from './assets/images/admin.png';
import pret from './assets/images/pret.png';
import logo1 from './assets/images/logo1.png';

function Dashboard() {
    return (
        <div className="dashboard-page-container">
            <div className="dashboard-sidebar">
                <div className="sidebar-logo-wrapper">
                    <img src={logo1} alt="Liqtrade Logo" className="sidebar-logo" />
                </div>
                <nav className="sidebar-nav">
                    <a href="#" className="nav-item active">
                        <i className="fas fa-th-large"></i>
                        <span>Tableau de Bord</span>
                    </a>
                    <a href="#" className="nav-item">
                        <i className="fas fa-exchange-alt"></i>
                        <span>Mes transactions</span>
                    </a>
                    <a href="#" className="nav-item">
                        <i className="fas fa-users"></i>
                        <span>Mes clients</span>
                    </a>
                    <a href="#" className="nav-item">
                        <i className="fas fa-question-circle"></i>
                        <span>Assistance</span>
                    </a>
                </nav>

                <nav className="sidebar-bottom-nav">
                    <a href="#" className="nav-item">
                        <i className="fas fa-bell"></i>
                        <span>Mes notifications (1)</span>
                    </a>
                    <a href="#" className="nav-item">
                        <i className="fas fa-cog"></i>
                        <span>Réglages</span>
                    </a>
                </nav>

                <div className="sidebar-user-profile">
                    <div className="profile-avatar">
                        <img src={admin} alt="Paul Dumartin" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">Paul Dumartin</div>
                        <div className="profile-status">
                            Statut Vérification KYC: <span className="status-valid">Validé</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-main-content">
                <header className="dashboard-main-header">
                    <h1 className="main-header-greeting">Bonjour Paul !</h1>
                    <div className="main-header-user-info">
                        <div className="user-avatar-circle">
                            <img src={admin} alt="User Avatar" />
                        </div>
                    </div>
                </header>
                <div className="dashboard-tabs-wrapper">
                    <div className="dashboard-tabs-left">
                        <button className="tab-button1">Mes prêts</button>
                        <button className="tab-button2">Mes factures</button>
                    </div>
                    <button className="btn-demander-financement">Demander un financement</button>
                </div>
                <section className="section-mon-compte">
                    <h2>Mon compte</h2>
                    <div className="mon-compte-grid">
                        <div className="account-card user-details-card">
                            <p className="account-card-value"><strong>Paul Dumartin </strong><br />
                                <span style={{ opacity: 0.5 }}> 14 rue du Louvre <br />PARIS 75001</span></p>
                        </div>
                        <div className="account-card segment-card">
                            <p className="card-sub-title">Segment</p>
                            <span className="segment-value">RET</span>
                        </div>
                        <div className="account-card risk-evaluation-card">
                            <p className="card-sub-title">Évaluation des risques <br />
                                <span style={{ color: 'green' }}><strong>Risque faible</strong></span></p>
                            <span className="segment-value" style={{ color: 'green' }}><strong>B</strong></span>
                        </div>
                        <div className="account-card score-card">
                            <p className="card-sub-title">Score risque<br />
                                <span style={{ color: 'black' }}><strong>Lorem Ipsum</strong></span></p>
                            <div className="risk-bar-container">
                                <span className="risk-label-start">A</span>
                                <div className="risk-meter-bar">
                                    <div className="risk-fill-section green"></div>
                                    <div className="risk-fill-section green"></div>
                                    <div className="risk-fill-section yellow"></div>
                                </div>
                                <span className="risk-label-end">C</span>
                            </div>
                        </div>
                        <div className="account-card last-transaction-card">
                            <p className="card-sub-title">Montant dernière transaction<br />
                                <span className="transaction-amount"><strong>80K</strong></span></p>
                            <i className="fa fa-coins"></i>
                        </div>
                    </div>
                </section>
                <section className="section-informations-financieres">
                    <h2>Informations financières</h2>
                    <div className="financial-content-wrapper">
                        <div className="chart-container-wrapper">
                            <div className="chart-placeholder">
                                <div className="chart-y-axis">
                                    {/* Ordre des éléments inversé pour correspondre au PDF avec flex-direction: column-reverse */}
                                    <span>00K</span>
                                    <span>10K</span>
                                    <span>20K</span>
                                    <span>30K</span>
                                    <span>40K</span>
                                    <span>50K</span>
                                </div>
                                <div className="chart-area">
                                    <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="chart-svg">
                                        {/* Lignes de grille horizontales */}
                                        <line x1="0" y1="200" x2="400" y2="200" stroke="#ddd" strokeWidth="1"></line>
                                        <line x1="0" y1="160" x2="400" y2="160" stroke="#eee" strokeWidth="0.5" strokeDasharray="2,2"></line>
                                        <line x1="0" y1="120" x2="400" y2="120" stroke="#eee" strokeWidth="0.5" strokeDasharray="2,2"></line>
                                        <line x1="0" y1="80" x2="400" y2="80" stroke="#eee" strokeWidth="0.5" strokeDasharray="2,2"></line>
                                        <line x1="0" y1="40" x2="400" y2="40" stroke="#eee" strokeWidth="0.5" strokeDasharray="2,2"></line>

                                        {/* Ligne Verte (adaptée pour correspondre au PDF) */}
                                        <polyline points="0,170 40,120 80,80 120,100 160,70 200,85 240,110 280,100 320,80 360,60 400,20" fill="none" stroke="var(--liqtrade-green-dark)" strokeWidth="2" />
                                        {/* Ligne Bleue/Cyan (adaptée pour correspondre au PDF) */}
                                        <polyline points="0,180 40,150 80,130 120,120 160,110 200,100 240,110 280,100 320,120 360,110 400,90" fill="none" stroke="var(--liqtrade-blue-light)" strokeWidth="2" />
                                        {/* Ligne Orange (adaptée pour correspondre au PDF) */}
                                        <polyline points="0,190 40,170 80,150 120,160 160,140 200,120 240,130 280,110 320,130 360,120 400,100" fill="none" stroke="var(--liqtrade-orange)" strokeWidth="2" />

                                        {/* Point et texte pour 2973K€ sur la ligne verte */}
                                        {/* Coordonnées du point (x,y) sur la ligne verte */}
                                        <circle cx="80" cy="80" r="4" fill="var(--liqtrade-green-dark)" stroke="white" strokeWidth="1.5" />
                                        <text x="80" y="70" textAnchor="middle" className="chart-value-label">2973K€</text>
                                    </svg>
                                    <div className="chart-x-axis">
                                        <span>1</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25</span>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-legend">
                                <div className="legend-item"><span className="legend-color green"></span> Lorem Ipsum</div>
                                <div className="legend-item"><span className="legend-color blue"></span> Lorem Ipsum</div>
                                <div className="legend-item"><span className="legend-color orange"></span> Lorem Ipsum</div>
                            </div>

                        </div>
                        <div className="financial-table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tenor</th>
                                        <th>Market Place</th>
                                        <th>Market Risk Free Date</th>
                                        <th>Market Risk Premium</th>
                                        <th>Change %</th>
                                        <th>Variation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>7 DAYS</td>
                                        <td>0.0000</td>
                                        <td>0</td>
                                        <td>0.0000</td>
                                        <td>0</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>30 DAYS</td>
                                        <td>0.0000</td>
                                        <td>0.02345</td>
                                        <td>0.0000</td>
                                        <td>0.02345</td>
                                        <td>9</td>
                                    </tr>
                                    <tr>
                                        <td>180 DAYS</td>
                                        <td>0.03500</td>
                                        <td>0.03500</td>
                                        <td>0.03500</td>
                                        <td>0.03500</td>
                                        <td>0.0500</td>
                                    </tr>
                                    <tr>
                                        <td>360 DAYS</td>
                                        <td>0.00400</td>
                                        <td>0.004400</td>
                                        <td>0.004400</td>
                                        <td>0.004400</td>
                                        <td>0.004000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                <section className="section-transactions">
                    <h2>Transactions</h2>
                    <div className="transactions-tabs">
                        <button className="transaction-tab active">Actifs</button>
                        <button className="transaction-tab">En attente (1)</button>
                        <button className="transaction-tab">Clos</button>
                    </div>
                    <div className="transaction-status-grid">
                        <div className="status-card prêt-solicitee-card">
                            <p className="card-sub-title">Etat</p>
                            <h6 className="card-sub-title">Prêt Société</h6>
                              <i className="fa fa-check-circle check-icon"></i>
                            <div className="status-progress-bar">
                                <div className="progress-fill green-fill"></div>
                                <span className="status-text-valid">Validé</span>
                            </div>
                            <p className="card-sub-title">Prêt HotDoggs</p>
                              <i className="fa fa-check-circle check-icon"></i>
                            <div className="status-progress-bar">
                                <div className="progress-fill green-fill"></div>
                                <span className="status-text">En attente</span>
                            </div>
                            <button className="create-dossier-btn">Créer un nouveau dossier</button>
                        </div>
                       
                        <div className="status-card montant-en-cours-card">
                            <p className="card-sub-title">Prêt Solicitée</p>
                            <p className="metric-value">39 234€</p>
                            <p className="sub-text">Montant du prêt en cours</p>
                            <div className="status-validation">
                                <i className="fa fa-check-circle green-check"></i>
                                <span>Prêt validé</span>
                            </div>
                        </div>

                        <div className="status-card en-attente-details-card">
                            <p className="card-sub-title">En attente</p>
                            <h3 className="status-metric">Prêt HotDoggs</h3>
                            <div className="donut-chart-container">
                                {/* Donut Chart SVG - properties adjusted for visual accuracy as per PDF */}
                                <svg width="40" height="40" viewBox="0 0 100 100" className="donut-chart">
                                    {/* Grey background circle */}
                                    <circle cx="50" cy="50" r="20" fill="transparent" stroke="#e0e0e0" strokeWidth="8" />
                                    {/* Green segment (Accord ouverture) */}
                                    <circle cx="50" cy="50" r="20" fill="transparent" stroke="var(--liqtrade-green-dark)" strokeWidth="8" strokeDasharray="40 125.6" strokeDashoffset="0" />
                                    {/* Orange segment (Accord demande) */}
                                    <circle cx="50" cy="50" r="20" fill="transparent" stroke="var(--liqtrade-orange)" strokeWidth="8" strokeDasharray="30 125.6" strokeDashoffset="-40" />
                                    {/* Blue segment (Évaluation des risques) */}
                                    <circle cx="50" cy="50" r="20" fill="transparent" stroke="var(--liqtrade-blue-light)" strokeWidth="8" strokeDasharray="10 125.6" strokeDashoffset="-70" />
                                </svg>

                                <div className="donut-legend">
                                    <div className="legend-item"><i className="fa fa-check-circle"></i> Accord ouverture</div>
                                    <div className="legend-item"><i className="fa fa-check-circle"></i> Accord demande</div>
                                    <div className="legend-item"><i className="fa fa-check-circle"></i> Évaluation des risques</div>
                                </div>
                            </div>
                            <p className="small-text">Pour déclencher la prochaine étape <br /> de validation, veuillez nous joindre:</p>
                            <p className="small-text">Dossier super important.pdf </p>
                        </div>

                        <div className="status-card cloture-card">
                            <p className="card-sub-title">Cloturé</p>
                            <div className="trophy-wrapper">
                                <img src={pret} alt="Loan icon" />
                            </div>
                            <p className="cloture-text">Prêt Société</p>
                            <p className="cloture-date">Estimation de clôture du dossier au <br /><strong>13/08/2022</strong></p>
                        </div>
                    </div>

                    <div className="transactions-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Numéro du contrat</th>
                                    <th>Identifiant emprunteur</th>
                                    <th>Montant demandé</th>
                                    <th>Montant du prêt</th>
                                    <th>Mensualité</th>
                                    <th>Durée souhaitée</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Prêt Société</strong></td>
                                    <td>13452789</td>
                                    <td>UK567U8</td>
                                    <td>39 234€</td>
                                    <td>39 234€</td>
                                    <td>700€</td>
                                    <td>18 mois</td>
                                </tr>
                                <tr>
                                    <td><strong>Prêt HotDoggs</strong></td>
                                    <td>67547800</td>
                                    <td>UK567U8</td>
                                    <td>12 300€</td>
                                    <td>En attente</td>
                                    <td>En attente</td>
                                    <td>14 mois</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="transactions-table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Taux d'intérêt</th>
                                    <th>Commission</th>
                                    <th>Taux Effect Global</th>
                                    <th>Date de la demande</th>
                                    <th>Date dernière échéance</th>
                                    <th>Statut de la demande</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Prêt Société</strong></td>
                                    <td>3%</td>
                                    <td>Lorem Ipsum</td>
                                    <td>3</td>
                                    <td>01/11/2019</td>
                                    <td>01/04/2022</td>
                                    <td className="status-valid1">Validé</td>
                                </tr>
                                <tr>
                                    <td><strong>Prêt HotDoggs</strong></td>
                                    <td>8%</td>
                                    <td>Lorem Ipsum</td>
                                    <td>5</td>
                                    <td>04/09/2021</td>
                                    <td>En attente</td>
                                    <td className="status-pending">En attente</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;