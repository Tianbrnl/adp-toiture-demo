import React from 'react'
import { Star, ArrowRight, Quote } from 'lucide-react'

export const testimonialsData = [
  {
    id: 1,
    rating: 5,
    quote: '« Travail soigné et équipe professionnelle. Notre toit est comme neuf ! »',
    author: 'M. Dupont',
    role: 'Particulier, Genève',
  },
  {
    id: 2,
    rating: 5,
    quote: '« Des conseils clairs et un résultat impeccable. Je recommande sans hésiter. »',
    author: 'Mme Martin',
    role: 'Particulière, Genève',
  },
  {
    id: 3,
    rating: 5,
    quote: '« Intervention rapide et efficace. Une équipe sérieuse et à l\'écoute. »',
    author: 'M. Rossi',
    role: 'Régie immobilière, Genève',
  },
]

export function Testimonials({ onNavigate }) {
  return (
    <section id="avis" className="testimonials-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-row">
          <div>
            <div className="section-eyebrow eyebrow-dark">
              <span className="eyebrow-text">ILS NOUS FONT CONFIANCE</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="section-heading text-white">Des clients satisfaits.</h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="btn btn-outline-light-pill"
          >
            <span>Voir tous les avis</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Review Cards */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              {/* 5 Red Stars */}
              <div className="star-rating" aria-label={`${item.rating} sur 5 étoiles`}>
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={17} className="star-icon-red" fill="#E52320" stroke="#E52320" />
                ))}
              </div>

              {/* Quote text */}
              <p className="testimonial-quote">{item.quote}</p>

              {/* Author & role + Quote watermark */}
              <div className="testimonial-footer">
                <div className="testimonial-author-wrap">
                  <div className="testimonial-author">{item.author}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>

                {/* Subtle double quotation watermark */}
                <div className="quote-watermark">
                  <Quote size={36} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
