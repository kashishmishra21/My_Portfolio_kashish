import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { educationData } from '../data/educationData';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={14} /> Academics
          </span>
          <h2 className="section-title">
            Education <span className="accent">History</span>
          </h2>
          <p className="section-subtitle">
            Academic qualifications and Computer Science foundational studies.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((edu) => (
            <div key={edu.id} className="glass-card education-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <GraduationCap size={22} />
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.65rem',
                    background: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-full)',
                    color: 'var(--text-muted)'
                  }}
                >
                  {edu.duration}
                </div>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <div className="edu-institution">{edu.institution}</div>

              {edu.location && (
                <div className="edu-meta">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={14} /> {edu.location}
                  </span>
                </div>
              )}

              <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                <strong>Field:</strong> {edu.field}
              </div>

              {edu.highlight && (
                <div
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.25rem',
                    fontStyle: 'italic'
                  }}
                >
                  {edu.highlight}
                </div>
              )}

              <div className="edu-score-pill">
                <span>{edu.scoreLabel}</span>
                <span className="score-val">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
