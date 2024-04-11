import { useState } from 'react';
import Grimace from './grimace.png';

function Nav() {
    const [activePage, setActivePage] = useState(window.location.pathname);

    const handleNavLinkClick = (path) => {
        setActivePage(path);
    };

    return (
        <div>
            <nav className="navbar bg-dark border-bottom navbar-expand-md" data-bs-theme="dark">
                <div className="container-fluid">
                    <img src={Grimace} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                    <a className="navbar-brand mx-2" href="/">Grimace Gastronomy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/recipes' ? 'active' : ''}`}
                                   href="/recipes" onClick={() => handleNavLinkClick('/recipes')}>Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/catalogue' ? 'active' : ''}`}
                                   href="/catalogue" onClick={() => handleNavLinkClick('/recipes')}>Catalogue</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/formtest' ? 'active' : ''}`}
                                   href="/recipeForm" onClick={() => handleNavLinkClick('/recipeForm')}>Formulaire</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/listClts' ? 'active' : ''}`}
                                   href="/listClts" onClick={() => handleNavLinkClick('/listClts')}>Clients</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className={`nav-link ${activePage === '/profile' ? 'active' : ''}`} href="/profile"
                                   onClick={() => handleNavLinkClick('/profile')}>Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/signIn' ? 'active' : ''}`} href="/signIn"
                                   onClick={() => handleNavLinkClick('/signIn')}>Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/signUp' ? 'active' : ''}`} href="/signUp"
                                   onClick={() => handleNavLinkClick('/signUp')}>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
