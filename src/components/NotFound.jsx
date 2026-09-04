import React from 'react';
import { Home } from 'lucide-react';

export default function NotFound({ onGoHome }) {
  return (
    <div className="not-found-wrapper">
      <div className="glass-card not-found-card">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-desc">
          The requested page or resource could not be found on this developer portfolio.
        </p>

        <button
          onClick={onGoHome}
          className="btn btn-primary"
          style={{ padding: '0.8rem 1.8rem' }}
        >
          <Home size={18} /> Back to Home
        </button>
      </div>
    </div>
  );
}
