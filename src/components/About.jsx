import React from 'react'
import { ArrowRight, ShieldCheck, Users, MapPin } from 'lucide-react'
import teamImage from '../assets/images/team.jpg'

export function About({ onLearnMore }) {
  return (
    <section id="apropos" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Text & Story */}
          <div className="about-content">
            <div className="section-eyebrow eyebrow-dark">
              <span className="eyebrow-text">NOTRE ENTREPRISE</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="about-heading">
              Une équipe à taille humaine,<br />
              un savoir-faire reconnu.
            </h2>

            <p className="about-text">
              Basés aux Acacias, aux Vives, à Genève, nous mettons notre expérience et notre savoir-faire au service de vos projets de toiture. Notre équipe de 7 à 8 collaborateurs intervient pour les particuliers, les entreprises et en collaboration avec les plus grands acteurs du secteur.
            </p>

            {/* Swiss Quality Highlights */}
            <div className="about-highlights">
              <div className="highlight-pill">
                <Users size={16} className="text-red" />
                <span>7 à 8 collaborateurs qualifiés</span>
              </div>
              <div className="highlight-pill">
                <MapPin size={16} className="text-red" />
                <span>Basés à Genève (Acacias / Eaux-Vives)</span>
              </div>
              <div className="highlight-pill">
                <ShieldCheck size={16} className="text-red" />
                <span>Respect des normes suisses SIA</span>
              </div>
            </div>

            <div className="about-action">
              <button
                type="button"
                onClick={onLearnMore}
                className="btn btn-outline-light"
              >
                <span>En savoir plus</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Workshop Team Photo */}
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img 
                src={teamImage} 
                alt="Équipe ADP Toiture SA devant le fourgon d'intervention dans notre atelier" 
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-badge">
                <span className="badge-dot" />
                <span>Atelier de fabrication & équipe mobile Genève</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
