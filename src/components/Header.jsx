import React, { useState, useEffect } from 'react'
import { Phone, ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from './Logo'

export function Header({ activeSection, onNavigate, onOpenQuoteModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

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

  const handleQuoteClick = () => {
    setMobileMenuOpen(false)
    if (onOpenQuoteModal) {
      onOpenQuoteModal()
    } else {
      onNavigate('devis')
    }
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
          {/* Phone call CTA: full on desktop, compact on phone */}
          <a 
            href="tel:0787609636" 
            className="phone-cta" 
            title="Appeler ADP Toiture SA au 078 760 96 36"
            aria-label="Appeler ADP Toiture SA"
          >
            <Phone size={16} className="phone-icon" />
            <span className="phone-number">078 760 96 36</span>
          </a>

          {/* Quote Button */}
          <button
            type="button"
            onClick={handleQuoteClick}
            className="btn btn-primary header-quote-btn"
          >
            <span className="quote-btn-text-full">Demander un devis</span>
            <span className="quote-btn-text-compact">Devis</span>
            <ArrowRight size={15} className="btn-arrow" />
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div 
          className="mobile-nav-backdrop" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        <div className="mobile-nav-content">
          <div className="mobile-nav-top">
            <Logo />
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav aria-label="Navigation mobile">
            <ul className="mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id ? (
                      <span className="mobile-active-dot" />
                    ) : (
                      <ArrowRight size={14} className="mobile-nav-arrow" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav-footer">
            <a href="tel:0787609636" className="mobile-phone-btn">
              <Phone size={18} />
              <span>078 760 96 36</span>
            </a>
            <button
              type="button"
              onClick={handleQuoteClick}
              className="btn btn-primary w-full mobile-cta-btn"
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
