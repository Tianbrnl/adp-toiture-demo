import React from 'react'

export function Partners() {
  return (
    <section className="partners-section">
      <div className="section-container">
        {/* Eyebrow */}
        <div className="section-eyebrow partners-eyebrow">
          <span className="eyebrow-text">ILS NOUS FONT CONFIANCE</span>
          <span className="eyebrow-line" />
        </div>

        {/* Logos Grid */}
        <div className="partners-grid">
          {/* 1. Implenia */}
          <div className="partner-logo-item" title="Implenia Suisse">
            <svg viewBox="0 0 160 50" className="partner-svg" aria-label="Logo Implenia">
              {/* Stylized Daisy / Sunburst Icon */}
              <g transform="translate(25, 25)">
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => (
                  <ellipse
                    key={idx}
                    cx="0"
                    cy="-13"
                    rx="2.8"
                    ry="7.5"
                    transform={`rotate(${angle})`}
                    fill="#F28E2B"
                    opacity={idx % 2 === 0 ? "0.95" : "0.75"}
                  />
                ))}
                <circle cx="0" cy="0" r="4.5" fill="#E15759" />
              </g>
              <text x="52" y="32" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="22" fill="#E86C1F" letterSpacing="-0.5">
                Implenia
              </text>
            </svg>
          </div>

          {/* 2. Losinger Marazzi */}
          <div className="partner-logo-item" title="Losinger Marazzi">
            <svg viewBox="0 0 170 50" className="partner-svg" aria-label="Logo Losinger Marazzi">
              <rect x="10" y="4" width="150" height="42" rx="21" fill="#FF5C00" />
              <text x="85" y="23" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="13" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.8">
                LOSINGER
              </text>
              <text x="85" y="36" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="12" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.8">
                MARAZZI
              </text>
            </svg>
          </div>

          {/* 3. Racines Carrées */}
          <div className="partner-logo-item" title="Racines Carrées Charpente Menuiserie">
            <svg viewBox="0 0 190 50" className="partner-svg" aria-label="Logo Racines Carrées">
              <rect x="5" y="6" width="180" height="38" rx="2" fill="#14171C" />
              {/* Red ribbon section */}
              <path d="M5 6 L185 6 L185 24 L5 24 Z" fill="#E52320" />
              {/* Stylized root marks */}
              <path d="M12 36 L22 14 L30 36 L38 20" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <text x="52" y="20" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="10.5" fill="#FFFFFF" letterSpacing="0.5">
                RACINES CARRÉES
              </text>
              <text x="52" y="36" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="8" fill="#D1D5DB" letterSpacing="0.3">
                Charpente Menuiserie
              </text>
            </svg>
          </div>

          {/* 4. De Gand Paysage */}
          <div className="partner-logo-item" title="De Gand Paysage">
            <svg viewBox="0 0 180 50" className="partner-svg" aria-label="Logo De Gand Paysage">
              {/* Emblem icon */}
              <rect x="8" y="7" width="34" height="36" rx="2" fill="none" stroke="#688047" strokeWidth="2" />
              <path d="M16 35 C18 20 28 15 34 14 C33 24 28 32 16 35 Z" fill="#688047" />
              <path d="M17 34 L28 20" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
              {/* Text */}
              <text x="52" y="24" fontFamily="'Inter', serif" fontWeight="700" fontSize="16" fill="#3E4E2C" letterSpacing="1">
                DE GAND
              </text>
              <text x="52" y="38" fontFamily="'Inter', sans-serif" fontWeight="500" fontSize="13" fill="#506637" letterSpacing="2.5">
                PAYSAGE
              </text>
            </svg>
          </div>

          {/* 5. M Étanchéité Sàrl */}
          <div className="partner-logo-item" title="M Étanchéité Sàrl">
            <svg viewBox="0 0 170 50" className="partner-svg" aria-label="Logo M Étanchéité Sàrl">
              {/* Roof geometric emblem */}
              <g transform="translate(18, 12)">
                <path d="M2 14 L8 6 L14 14" stroke="#104D6D" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <path d="M8 14 L14 4 L20 14" stroke="#1E7A9C" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
                <path d="M14 14 L20 6 L26 14" stroke="#104D6D" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
              </g>
              <text x="52" y="24" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="13" fill="#104D6D" letterSpacing="0.4">
                M ÉTANCHÉITÉ
              </text>
              <text x="52" y="37" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="11" fill="#1E7A9C">
                Sàrl
              </text>
              <circle cx="86" cy="34" r="5" fill="#D3A519" />
              <text x="86" y="37.5" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="9" fill="#FFFFFF" textAnchor="middle">+</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
