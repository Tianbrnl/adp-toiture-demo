import React from 'react'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Logo } from './Logo'

export function Footer({ onNavigate, onOpenLegal }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="section-container">
        {/* Main Footer Row */}
        <div className="footer-main-row">
          {/* Col 1: Logo and swiss slogan */}
          <div className="footer-brand-col">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
              aria-label="Retour en haut"
            >
              <Logo />
            </a>
            <p className="footer-brand-text">
              Entreprise spécialisée en couverture, ferblanterie et étanchéité de toitures à Genève.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <nav className="footer-nav-col" aria-label="Navigation pied de page">
            <ul className="footer-nav-list">
              <li>
                <button type="button" onClick={() => onNavigate('hero')} className="footer-nav-link">
                  Accueil
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('services')} className="footer-nav-link">
                  Nos services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('realisations')} className="footer-nav-link">
                  Nos réalisations
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('apropos')} className="footer-nav-link">
                  À propos
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('devis')} className="footer-nav-link">
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Col 3: Direct contact details */}
          <div className="footer-contact-col">
            <div className="footer-contact-item">
              <Phone size={15} className="footer-contact-icon" />
              <a href="tel:0787609636" className="footer-contact-link">
                078 760 96 36
              </a>
            </div>

            <div className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <a href="mailto:info@adp-toiture.ch" className="footer-contact-link">
                info@adp-toiture.ch
              </a>
            </div>

            <div className="footer-contact-item">
              <MapPin size={15} className="footer-contact-icon" />
              <span className="footer-address">
                Chem. Frank-Thomas 24B, 1208 Genève
              </span>
            </div>
          </div>

          {/* Col 4: Action button */}
          <div className="footer-cta-col">
            <button
              type="button"
              onClick={() => onNavigate('devis')}
              className="btn btn-primary footer-btn"
            >
              <span>Demander un devis</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Sub-footer copyright & legal */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © 2024 ADP Toiture SA. Tous droits réservés.
          </p>
          <div className="legal-links">
            <button
              type="button"
              onClick={() => onOpenLegal('mentions')}
              className="legal-link"
            >
              Mentions légales
            </button>
            <span className="legal-sep">|</span>
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="legal-link"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
