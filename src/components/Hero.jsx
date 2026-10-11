import React from 'react'
import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/images/hero.jpg'

export function Hero({ onNavigate }) {
  return (
    <section id="hero" className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg-container">
        <img 
          src={heroImage} 
          alt="Artisan couvreur ferblantier au travail sur une toiture à Genève avec vue sur le Jet d'eau" 
          className="hero-bg-image"
        />
        {/* Subtle cinematic gradient overlays for high text contrast */}
        <div className="hero-overlay-dark" />
        <div className="hero-overlay-gradient" />
      </div>

      <div className="hero-content-wrapper">
        <div className="hero-content">
          {/* Eyebrow badge */}
          <div className="section-eyebrow eyebrow-hero">
            <span className="eyebrow-text">À GENÈVE ET SES ALENTOURS</span>
            <span className="eyebrow-line" />
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            ADP Toiture SA<br />
            pour vos travaux<br />
            de <span className="text-red">toiture.</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Ferblanterie, couverture et étanchéité.<br />
            Un savoir-faire au service des particuliers<br />
            et des professionnels.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              type="button"
              onClick={() => onNavigate('devis')}
              className="btn btn-primary hero-btn-quote"
            >
              <span>Demander un devis</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="btn btn-secondary hero-btn-services"
            >
              <span>Nos services</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
