import React, { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Partners } from './components/Partners'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Wrench, Clock } from 'lucide-react'

export function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [selectedService, setSelectedService] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [legalModalType, setLegalModalType] = useState(null) // 'mentions' | 'privacy' | null

  // Smooth scroll handler
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 76
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'apropos', 'realisations', 'avis', 'devis', 'contact']
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-layout">
      {/* 1. Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 3. Services Section */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          onNavigate={handleNavigate}
        />

        {/* 4. About Section */}
        <About
          onLearnMore={() => setIsAboutModalOpen(true)}
        />

        {/* 5. Projects Section */}
        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
          onNavigate={handleNavigate}
        />

        {/* 6. Testimonials Section */}
        <Testimonials onNavigate={handleNavigate} />

        {/* 7. Client Logos Section */}
        <Partners />


      </main>

      {/* 9. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title || ''}
      >
        {selectedService && (
          <div className="modal-content-grid">
            <div className="modal-media">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="modal-image"
              />
            </div>
            <div className="modal-info">
              <p className="modal-lead">{selectedService.longDescription}</p>

              <h4 className="modal-subtitle">Nos prestations incluses :</h4>
              <ul className="modal-features-list">
                {selectedService.features?.map((feat, idx) => (
                  <li key={idx} className="modal-feature-item">
                    <Check size={16} className="text-red flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-action-row">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedService(null)
                    handleNavigate('devis')
                  }}
                  className="btn btn-primary"
                >
                  <span>Demander un devis pour ce service</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Project Showcase Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="modal-content-grid">
            <div className="modal-media">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="modal-image"
              />
            </div>
            <div className="modal-info">
              <div className="modal-badge-row">
                <span className="modal-tag">{selectedProject.category}</span>
                <span className="modal-tag flex items-center gap-1">
                  <MapPin size={13} className="text-red" />
                  {selectedProject.location}
                </span>
              </div>

              <p className="modal-lead">{selectedProject.description}</p>

              <div className="modal-spec-card">
                <h4 className="modal-subtitle">Détails de l'ouvrage :</h4>
                <p className="text-sm text-gray-600">{selectedProject.details}</p>
              </div>

              <div className="modal-action-row">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null)
                    handleNavigate('devis')
                  }}
                  className="btn btn-primary"
                >
                  <span>Un projet similaire ? Demandez une offre</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* About / Notre Entreprise Modal */}
      <Modal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        title="À propos d'ADP Toiture SA"
      >
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p>
            Implantée au cœur de Genève (Acacias et Eaux-Vives), <strong>ADP Toiture SA</strong> est une entreprise artisanale spécialisée dans l’enveloppe du bâtiment, réunissant des ferblantiers et couvreurs passionnés par les règles de l'art suisse.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3">
              <ShieldCheck size={22} className="text-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900 font-semibold text-sm">Garantie & Normes SIA</strong>
                <span className="text-xs text-gray-500">Travaux exécutés dans le respect strict des normes de la Société suisse des ingénieurs et des architectes.</span>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3">
              <Wrench size={22} className="text-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900 font-semibold text-sm">Atelier de façonnage</strong>
                <span className="text-xs text-gray-500">Fabrication sur mesure des éléments de ferblanterie en zinc, cuivre et aluminium directement sur place.</span>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3">
              <Clock size={22} className="text-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900 font-semibold text-sm">Réactivité d'intervention</strong>
                <span className="text-xs text-gray-500">Déplacement rapide pour diagnostics d’infiltrations, sécurisation après tempête et dépannages urgents.</span>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-start gap-3">
              <Phone size={22} className="text-red flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-gray-900 font-semibold text-sm">Interlocuteur unique</strong>
                <span className="text-xs text-gray-500">Accompagnement personnalisé par nos maîtres couvreurs du devis jusqu’à la réception du chantier.</span>
              </div>
            </div>
          </div>
          <p>
            Que vous soyez propriétaire d'une villa individuelle, membre d’une copropriété PPE ou gestionnaire de régie immobilière genevoise, nous vous garantissons des finitions soignées et une étanchéité pérenne.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setIsAboutModalOpen(false)
                handleNavigate('devis')
              }}
              className="btn btn-primary"
            >
              <span>Contacter l'équipe ADP Toiture</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </Modal>

      {/* Legal & Privacy Modal */}
      <Modal
        isOpen={!!legalModalType}
        onClose={() => setLegalModalType(null)}
        title={legalModalType === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
      >
        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
          {legalModalType === 'mentions' ? (
            <>
              <p><strong>Raison sociale :</strong> ADP Toiture SA</p>
              <p><strong>Siège social :</strong> Chem. Frank-Thomas 24B, 1208 Genève, Suisse</p>
              <p><strong>Téléphone :</strong> +41 (0)78 760 96 36</p>
              <p><strong>Courriel :</strong> info@adp-toiture.ch</p>
              <p><strong>Activité :</strong> Travaux de toiture, ferblanterie du bâtiment, étanchéité de toitures-terrasses et façonnage métallique.</p>
              <p className="text-xs text-gray-400 mt-4">
                Ce site web est une démonstration interactive développée pour présenter les réalisations et services de l'entreprise.
              </p>
            </>
          ) : (
            <>
              <p>
                La protection de vos données personnelles est une priorité pour ADP Toiture SA. Les informations collectées via le formulaire de devis (nom, email, téléphone, description) sont destinées exclusivement à l'établissement de propositions commerciales.
              </p>
              <p>
                Conformément à la Loi fédérale sur la protection des données (LPD), vous disposez d'un droit d'accès, de rectification et de suppression des informations vous concernant sur simple demande écrite à info@adp-toiture.ch.
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Note : Sur cette version de démonstration, aucune donnée n'est envoyée à des serveurs distants.
              </p>
            </>
          )}
        </div>
      </Modal>
    </div>
  )
}

export default App
