import React from 'react';
import { UserCheck, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { personalData } from '../data/personalData';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <UserCheck size={14} /> Background
          </span>
          <h2 className="section-title">
            About <span className="accent">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate developer dedicated to modern web engineering and continuous technology advancement.
          </p>
        </div>

        <div className="about-grid">
          {/* Card 1: Professional Bio & Quote */}
          <div className="glass-card about-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Developer Journey
            </h3>
            
            <p className="about-text">
              I am a Full Stack Developer currently working at <strong>Current Affairs 360</strong>. I specialize in building responsive, accessible, and user-friendly web applications while actively advancing my skills in AI website integration.
            </p>

            <p className="about-text" style={{ marginBottom: 0 }}>
              I enjoy solving complex problems, writing clean code, and continuously updating myself by adopting modern technologies used across the industry.
            </p>

            <div className="quote-card">
              <Quote size={20} style={{ color: 'var(--accent-primary)', marginBottom: '0.4rem' }} />
              <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                "{personalData.personalStatement}"
              </p>
            </div>
          </div>

          {/* Card 2: Technical Focus & Core Strengths */}
          <div className="glass-card about-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
              Key Focus & Strengths
            </h3>

            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Areas of Interest
              </h4>
              <div className="interests-grid">
                {personalData.interests.map((interest, idx) => (
                  <span key={idx} className="pill-item">
                    <Sparkles size={14} style={{ color: 'var(--accent-primary)' }} />
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                Core Strengths
              </h4>
              <div className="strengths-grid">
                {personalData.strengths.map((strength, idx) => (
                  <span key={idx} className="pill-item">
                    <CheckCircle2 size={14} style={{ color: 'var(--status-success)' }} />
                    {strength}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
