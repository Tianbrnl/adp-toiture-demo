import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Phone, Sparkles, RefreshCw } from 'lucide-react'

export function QuoteForm({ isModal = false, onComplete }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Genève',
    service: 'couverture',
    propertyType: 'villa',
    urgency: 'normal',
    description: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const servicesList = [
    { id: 'couverture', label: 'Couverture (Pose & Rénovation)' },
    { id: 'ferblanterie', label: 'Ferblanterie (Zinc, Cuivre, Aluminium)' },
    { id: 'etancheite', label: 'Étanchéité (Toiture plate, Terrasse)' },
    { id: 'fabrication', label: 'Fabrication sur mesure en atelier' },
    { id: 'entretien', label: 'Entretien & Démoussage' },
    { id: 'urgence', label: 'Dépannage & Infiltration urgente' },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez renseigner votre nom complet.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d’adresse e-mail non valide.'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Veuillez indiquer un numéro de téléphone joignable.'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Merci de décrire brièvement votre projet ou les travaux envisagés.'
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Veuillez préciser votre demande (minimum 10 caractères).'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmittedData({ ...formData })
      if (onComplete) onComplete(formData)
    }, 600)
  }

  const handleReset = () => {
    setSubmittedData(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: 'Genève',
      service: 'couverture',
      propertyType: 'villa',
      urgency: 'normal',
      description: '',
    })
    setErrors({})
  }

  const formContent = (
    <div className={`quote-card-container ${isModal ? 'quote-card-modal' : ''}`}>
      {submittedData ? (
        /* Success confirmation card */
        <div className="quote-success-box animate-fade-in">
          <div className="success-icon-wrap">
            <CheckCircle2 size={50} className="text-emerald-500" />
          </div>
          <h3 className="success-title">Demande de devis enregistrée !</h3>
          <p className="success-text">
            Merci <strong>{submittedData.name}</strong>, votre simulation de demande de devis pour vos travaux de{' '}
            <strong>
              {servicesList.find((s) => s.id === submittedData.service)?.label || submittedData.service}
            </strong>{' '}
            a bien été prise en compte pour le secteur de <strong>{submittedData.city}</strong>.
          </p>

          {/* Demo Mode Notice */}
          <div className="demo-notice-alert">
            <Sparkles size={18} className="text-amber-500 flex-shrink-0" />
            <p>
              <strong>Mode Démonstration Web :</strong> Cette maquette front-end valide et simule l'envoi de formulaire sans expédition réelle de courriel.
            </p>
          </div>

          {/* Submission Details Summary */}
          <div className="submission-summary">
            <div className="summary-row">
              <span className="summary-label">Nom :</span>
              <span className="summary-val">{submittedData.name}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Téléphone :</span>
              <span className="summary-val">{submittedData.phone}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Email :</span>
              <span className="summary-val">{submittedData.email}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Détails :</span>
              <span className="summary-val">{submittedData.description}</span>
            </div>
          </div>

          <div className="success-actions">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-secondary inline-flex items-center gap-2"
            >
              <RefreshCw size={16} />
              <span>Nouvelle simulation</span>
            </button>

            <a
              href="tel:0787609636"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Appeler au 078 760 96 36</span>
            </a>
          </div>
        </div>
      ) : (
        /* Main Form */
        <form onSubmit={handleSubmit} noValidate className="quote-form">
          <div className="form-grid">
            {/* Prestation sélectionnée */}
            <div className="form-group col-span-2">
              <label htmlFor="service-select" className="form-label">
                Prestation souhaitée <span className="text-red">*</span>
              </label>
              <select
                id="service-select"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input"
              >
                {servicesList.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Nom */}
            <div className="form-group">
              <label htmlFor="name-input" className="form-label">
                Nom et prénom <span className="text-red">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex. Jean Dupont"
                className={`form-input ${errors.name ? 'input-error' : ''}`}
              />
              {errors.name && (
                <div className="error-message">
                  <AlertCircle size={14} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            {/* Téléphone */}
            <div className="form-group">
              <label htmlFor="phone-input" className="form-label">
                Téléphone (Suisse) <span className="text-red">*</span>
              </label>
              <input
                id="phone-input"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ex. 078 760 96 36"
                className={`form-input ${errors.phone ? 'input-error' : ''}`}
              />
              {errors.phone && (
                <div className="error-message">
                  <AlertCircle size={14} />
                  <span>{errors.phone}</span>
                </div>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email-input" className="form-label">
                Adresse e-mail <span className="text-red">*</span>
              </label>
              <input
                id="email-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Ex. jean.dupont@bluewin.ch"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
              />
              {errors.email && (
                <div className="error-message">
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>

            {/* Commune à Genève */}
            <div className="form-group">
              <label htmlFor="city-input" className="form-label">
                Localité / Commune (Genève)
              </label>
              <input
                id="city-input"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Ex. Carouge, Cologny..."
                className="form-input"
              />
            </div>

            {/* Type de bien */}
            <div className="form-group">
              <label htmlFor="property-select" className="form-label">
                Type de bien
              </label>
              <select
                id="property-select"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="form-input"
              >
                <option value="villa">Maison individuelle / Villa</option>
                <option value="immeuble">Immeuble locatif / PPE</option>
                <option value="commercial">Bâtiment artisanal / commercial</option>
                <option value="autre">Autre structure</option>
              </select>
            </div>

            {/* Délai envisagé */}
            <div className="form-group">
              <label htmlFor="urgency-select" className="form-label">
                Délai souhaité
              </label>
              <select
                id="urgency-select"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="form-input"
              >
                <option value="urgence">Urgent (Infiltration / Dépannage)</option>
                <option value="normal">Dans le mois à venir</option>
                <option value="futur">Projet à moyen terme / Étude</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group col-span-2">
              <label htmlFor="desc-input" className="form-label">
                Description de votre projet <span className="text-red">*</span>
              </label>
              <textarea
                id="desc-input"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Précisez les travaux de toiture souhaités..."
                className={`form-input ${errors.description ? 'input-error' : ''}`}
              />
              {errors.description && (
                <div className="error-message">
                  <AlertCircle size={14} />
                  <span>{errors.description}</span>
                </div>
              )}
            </div>
          </div>

          {/* Privacy notice & button */}
          <div className="form-submit-footer">
            <p className="form-privacy-note">
              🔒 Vos données restent confidentielles et sont utilisées uniquement pour établir votre offre.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary submit-quote-btn"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner-border" />
                  <span>Enregistrement...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Envoyer ma demande de devis</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )

  if (isModal) {
    return formContent
  }

  return (
    <section id="devis" className="quote-section">
      <div className="section-container">
        <div className="quote-header text-center">
          <div className="section-eyebrow eyebrow-center">
            <span className="eyebrow-text">VOTRE PROJET DE TOITURE</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-heading">Demander un devis gratuit & personnalisé</h2>
          <p className="quote-subheading">
            Nous étudions vos plans ou convenons d'une visite sur place dans tout le canton de Genève. Réponse sous 24h à 48h.
          </p>
        </div>
        {formContent}
      </div>
    </section>
  )
}
