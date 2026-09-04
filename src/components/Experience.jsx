import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Code, Layers } from 'lucide-react';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={14} /> Journey
          </span>
          <h2 className="section-title">
            Work <span className="accent">Experience</span>
          </h2>
          <p className="section-subtitle">
            Professional development history and software engineering internships.
          </p>
        </div>

        <div className="timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="role-title">{exp.role}</h3>
                    <div className="company-name">{exp.company}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                    <span className="duration-badge">
                      <Calendar size={14} style={{ display: 'inline', marginRight: '4px' }} />
                      {exp.duration}
                    </span>
                    <span className="type-tag">{exp.workType}</span>
                  </div>
                </div>

                {/* Work includes / Responsibilities */}
                {exp.workIncludes && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      Key Responsibilities & Scope
                    </h4>
                    <ul className="timeline-list">
                      {exp.workIncludes.map((item, iIdx) => (
                        <li key={iIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Projects worked on during internship */}
                {exp.projectsWorkedOn && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                      Projects Developed During Internship
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                      {exp.projectsWorkedOn.map((pItem, pIdx) => (
                        <div
                          key={pIdx}
                          style={{
                            padding: '0.85rem 1rem',
                            background: 'var(--bg-tertiary)',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>
                            {pItem.name}
                          </div>
                          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                            {pItem.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Learnings & Improvements */}
                {exp.learnings && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                      Key Skill Growth
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.learnings.map((lrn, lIdx) => (
                        <span key={lIdx} className="pill-item" style={{ fontSize: '0.8rem', padding: '0.3rem 0.7rem' }}>
                          <CheckCircle size={12} style={{ color: 'var(--status-success)' }} />
                          {lrn}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Pills */}
                {exp.technologies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
