'use client';
import React from 'react';

// GradientText component
const GradientText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <span
        className={`font-bold ${className}`}
        style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(89.84deg, #DA01B2 0.21%, #E72E76 50.07%, #FF8400 99.94%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        }}
    >
        {children}
    </span>
);

export default GradientText;
