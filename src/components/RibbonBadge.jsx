import React from 'react';

export default function RibbonBadge({ className = '' }) {
  return (
    <div className={`relative flex items-center justify-center pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 651 211"
        className="w-64 sm:w-80 md:w-96 lg:w-[440px] h-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700;900&display=swap');
              .balsamiq-text {
                font-family: 'Balsamiq Sans', 'Comic Sans MS', cursive, sans-serif;
                font-weight: 900;
              }
            `}
          </style>
          {/* Natural upward curve following the ribbon contour */}
          <path id="ribbonTextArc" d="M 45 124 Q 325.5 50 605 124" fill="none" />
          
          {/* Subtle soft shadow for depth without black stroke */}
          <filter id="softTextShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2.5" stdDeviation="1.5" flood-color="#094539" flood-opacity="0.35" />
          </filter>
        </defs>

        {/* The ribbon base asset */}
        <image
          href="/images/ribbon-base.webp"
          x="0"
          y="0"
          width="651"
          height="211"
        />

        {/* Large, prominent text in Balsamiq Sans and color #FEE607 without black border */}
        <text
          className="balsamiq-text"
          fontSize="60"
          fill="#FEE607"
          filter="url(#softTextShadow)"
          letterSpacing="0.5"
        >
          <textPath href="#ribbonTextArc" startOffset="50%" textAnchor="middle">
            My Daily Activities
          </textPath>
        </text>
      </svg>
    </div>
  );
}
