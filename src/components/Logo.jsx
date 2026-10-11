import React from 'react'

export function Logo({ light = false, className = '' }) {
  const textColor = light ? '#FFFFFF' : '#14171C'
  const subColor = light ? '#E2E8F0' : '#22252A'

  return (
    <div className={`logo-container inline-flex items-center select-none ${className}`}>
      <div className="flex flex-col items-center">
        {/* Main "adp" lettering */}
        <div className="flex items-baseline tracking-tight font-extrabold leading-none">
          <span 
            className="logo-main-text"
            style={{ 
              color: textColor,
              lineHeight: 0.85
            }}
          >
            adp
          </span>
        </div>
        
        {/* Subtitle "TOITURE SA" with red roof chevron accents */}
        <div className="logo-sub-wrapper flex items-center mt-1">
          {/* Left red roof angle */}
          <svg className="logo-chevron" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M9 6L2 3.5L9 1" stroke="#E52320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <span 
            className="logo-sub-text"
            style={{ 
              color: subColor,
              textTransform: 'uppercase'
            }}
          >
            TOITURE SA
          </span>

          {/* Right red roof angle */}
          <svg className="logo-chevron" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M1 6L8 3.5L1 1" stroke="#E52320" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
