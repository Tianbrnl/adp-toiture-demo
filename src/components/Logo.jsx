import React from 'react'

export function Logo({ light = false, className = '' }) {
  const textColor = light ? '#FFFFFF' : '#14171C'
  const subColor = light ? '#E2E8F0' : '#22252A'

  return (
    <div className={`logo-container inline-flex items-center gap-2 cursor-pointer select-none ${className}`}>
      <div className="flex flex-col items-center">
        {/* Main "adp" lettering */}
        <div className="flex items-baseline tracking-tight font-extrabold leading-none">
          <span 
            style={{ 
              color: textColor,
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: '34px',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 0.85
            }}
          >
            adp
          </span>
        </div>
        
        {/* Subtitle "TOITURE SA" with red roof chevron accents */}
        <div className="flex items-center gap-1.5 mt-1">
          {/* Left red roof angle */}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M9 6L2 3.5L9 1" stroke="#E52320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <span 
            style={{ 
              color: subColor,
              fontFamily: "'Inter', sans-serif",
              fontSize: '9px',
              fontWeight: 800,
              letterSpacing: '1.8px',
              textTransform: 'uppercase'
            }}
          >
            TOITURE SA
          </span>

          {/* Right red roof angle */}
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 6L8 3.5L1 1" stroke="#E52320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
