import React from 'react';
import { Award, GraduationCap, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

const iconMap = {
  Award: Award,
  GraduationCap: GraduationCap
};

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} /> Accomplishments
          </span>
          <h2 className="section-title">
            Certifications & <span className="accent">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Verified certificates and academic performance milestones.
          </p>
        </div>

        {/* Genuine Achievements Grid */}
        <div className="achievements-grid" style={{ marginBottom: 0 }}>
          {achievementsData.map((item) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <div key={item.id} className="glass-card achievement-card">
                <div className="achievement-header">
                  <div className="achievement-icon">
                    <IconComp size={24} />
                  </div>
                  <div>
                    <span className="achievement-type">{item.type}</span>
                    <h3 className="achievement-title">{item.title}</h3>
                  </div>
                </div>

                <div className="achievement-issuer">{item.issuer}</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                  {item.description}
                </p>

                {item.score && (
                  <div style={{ fontWeight: 800, color: 'var(--accent-primary)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                    {item.score}
                  </div>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', fontSize: '0.85rem', padding: '0.55rem' }}
                  >
                    <ExternalLink size={15} /> {item.linkText || 'Verify Certificate'}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
