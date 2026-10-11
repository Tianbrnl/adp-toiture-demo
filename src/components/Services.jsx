import React from 'react'
import { Home, Waves, Droplet, Package, ArrowRight } from 'lucide-react'
import imgCouverture from '../assets/images/service-couverture.jpg'
import imgFerblanterie from '../assets/images/service-ferblanterie.jpg'
import imgEtancheite from '../assets/images/service-etancheite.jpg'
import imgFabrication from '../assets/images/service-fabrication.jpg'

export const servicesData = [
  {
    id: 'couverture',
    title: 'Couverture',
    description: 'Pose et rénovation de toitures de tous types.',
    longDescription: 'Nous réalisons tous vos travaux de couverture en tuiles terre cuite, ardoises naturelles, bacs acier ou fibro-ciment. Du remplacement partiel à la réfection complète de toiture avec isolation thermique aux normes SIA.',
    features: ['Tuiles plates et mécaniques', 'Ardoise naturelle', 'Isolation thermique renforcée', 'Fenêtres de toit Velux®'],
    image: imgCouverture,
    icon: Home,
  },
  {
    id: 'ferblanterie',
    title: 'Ferblanterie',
    description: 'Travaux sur mesure en zinc, cuivre et aluminium.',
    longDescription: 'Spécialistes du travail des métaux fins, nos ferblantiers conçoivent et installent vos chéneaux, gouttières, noues, tuyaux de descente, raccords et garnitures de cheminées avec une précision chirurgicale.',
    features: ['Zinc titane naturel et prépatiné', 'Cuivre de haute pureté', 'Aluminium thermolaqué', 'Raccords étanches d’ornement'],
    image: imgFerblanterie,
    icon: Waves,
  },
  {
    id: 'etancheite',
    title: 'Étanchéité',
    description: 'Solutions durables pour toitures plates, terrasses et ouvrages.',
    longDescription: 'Protection maximale contre les infiltrations d’eau pour vos toitures plates, toits-terrasses accessibles, balcons et toitures végétalisées à l’aide de membranes bitumineuses thermosoudées ou synthétiques.',
    features: ['Membranes bitumineuses bicouche', 'Systèmes résine liquide', 'Étanchéité de toitures-terrasses', 'Toitures vertes & végétalisées'],
    image: imgEtancheite,
    icon: Droplet,
  },
  {
    id: 'fabrication',
    title: 'Fabrication sur mesure',
    description: 'Pièces et éléments de ferblanterie réalisés dans notre atelier.',
    longDescription: 'Grâce à notre atelier équipé de plieuses numériques et cisailles modernes, nous façonnons rapidement des pièces de ferblanterie sur plan adaptées à toutes les configurations complexes de chantier.',
    features: ['Pliage et profilage de précision', 'Profils personnalisés jusqu’à 6 mètres', 'Délais de confection express', 'Conseil technique et gabarits'],
    image: imgFabrication,
    icon: Package,
  },
]

export function Services({ onSelectService, onNavigate }) {
  return (
    <section id="services" className="services-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow-text">NOS SERVICES</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading">Notre savoir-faire.</h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('devis')}
            className="section-header-link"
          >
            <span>Voir tous nos services</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <div 
                key={service.id} 
                className="service-card group"
                onClick={() => onSelectService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelectService(service) }}
              >
                {/* Image Wrap */}
                <div className="service-image-container">
                  <img 
                    src={service.image} 
                    alt={`Service de ${service.title} par ADP Toiture SA`}
                    className="service-image"
                    loading="lazy"
                  />
                  {/* Floating Icon Box positioned on image corner */}
                  <div className="service-icon-box">
                    <Icon size={20} strokeWidth={2.2} className="text-gray-900" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
