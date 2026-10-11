import React, { useState, useEffect } from 'react'
import { Phone, ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from './Logo'

export function Header({ activeSection, onNavigate, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'services', label: 'Nos services' },
    { id: 'realisations', label: 'Nos réalisations' },
    { id: 'apropos', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (id) => {
    onNavigate(id)
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }} 
          className="header-logo-link"
          aria-label="ADP Toiture SA - Accueil"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navigation principale">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id} className="nav-item">
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                  >
                    {item.label}
                    {isActive && <span className="active-indicator" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">
          {/* Phone call CTA */}
          <a href="tel:0787609636" className="phone-cta" title="Appeler ADP Toiture SA">
            <Phone size={17} className="phone-icon" />
            <span className="phone-number">078 760 96 36</span>
          </a>

          {/* Quote Button */}
          <button
            type="button"
            onClick={() => onNavigate('devis')}
            className="btn btn-primary header-quote-btn"
          >
            <span>Demander un devis</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-top">
            <Logo />
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                  {activeSection === item.id && <span className="mobile-active-dot" />}
                </button>
              </li>
            ))}
          </ul>

          <div className="mobile-nav-footer">
            <a href="tel:0787609636" className="mobile-phone-btn">
              <Phone size={18} />
              <span>078 760 96 36</span>
            </a>
            <button
              type="button"
              onClick={() => { handleNavClick('devis'); }}
              className="btn btn-primary w-full"
            >
              <span>Demander un devis</span>
              <ArrowRight size={16} />
            </button>
            <p className="mobile-location-note">
              Intervention rapide dans tout le canton de Genève
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
