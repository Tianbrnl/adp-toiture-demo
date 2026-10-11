import React from 'react'
import { MapPin, ArrowRight, Eye } from 'lucide-react'
import imgEntretien from '../assets/images/project-entretien.jpg'
import imgTerrasse from '../assets/images/project-terrasse.jpg'
import imgRenovation from '../assets/images/project-renovation.jpg'
import imgCuivre from '../assets/images/project-cuivre.jpg'

export const projectsData = [
  {
    id: 'entretien',
    title: 'Entretien de toiture',
    category: 'Nettoyage & Démoussage',
    location: 'Genève',
    description: 'Nettoyage haute pression à eau tempérée, démoussage préventif et traitement hydrofuge incolore sur toiture en tuiles anciennes afin de prolonger la durée de vie de la toiture.',
    details: 'Intervention sur villa individuelle avec sécurisation sur ligne de vie.',
    image: imgEntretien,
  },
  {
    id: 'terrasse',
    title: 'Étanchéité de terrasse',
    category: 'Étanchéité Bitumineuse',
    location: 'Genève',
    description: 'Réfection complète du complexe d’étanchéité bicouche élastomère sur toit-terrasse résidentiel haut standing offrant une vue imprenable sur la rade de Genève.',
    details: 'Isolation thermique polyuréthane haute performance et relevés d’étanchéité sous couvertine zinc.',
    image: imgTerrasse,
  },
  {
    id: 'renovation',
    title: 'Rénovation de couverture',
    category: 'Toiture Historique & Ardoise',
    location: 'Genève',
    description: 'Restauration complète d’un comble mansardé sur immeuble de caractère genevois. Pose d’ardoises naturelles et ferblanterie en zinc quartz.',
    details: 'Réfection soignée des lucarnes œil-de-bœuf et ornements métalliques patrimoniaux.',
    image: imgRenovation,
  },
  {
    id: 'cuivre',
    title: 'Habillage en cuivre',
    category: 'Ferblanterie d’Art',
    location: 'Genève',
    description: 'Habillage complet sur mesure en feuilles de cuivre pur avec joint debout pour lucarnes et jouées de toiture. Finition patinée chaleureuse et durabilité séculaire.',
    details: 'Façonnage artisanal dans notre atelier genevois et pose minutieuse.',
    image: imgCuivre,
  },
]

export function Projects({ onSelectProject, onNavigate }) {
  return (
    <section id="realisations" className="projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow-text">NOS RÉALISATIONS</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">Des projets variés à Genève.</h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('devis')}
            className="section-header-link"
          >
            <span>Voir toutes nos réalisations</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 4 Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card group"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') onSelectProject(project) }}
            >
              {/* Image with zoom on hover */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} réalisé à ${project.location}`}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-hover-overlay">
                  <div className="project-zoom-btn">
                    <Eye size={18} />
                    <span>Découvrir</span>
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-location">
                  <MapPin size={14} className="location-pin" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
