import React from 'react';
import { Code2, Layout, Server, Database, Wrench, Sparkles, Cpu } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Sparkles: Sparkles
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} /> Expertise
          </span>
          <h2 className="section-title">
            Technical <span className="accent">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies, programming languages, databases, and modern tools I work with.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div key={idx} className="glass-card skill-category-card">
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="category-title">{cat.category}</h3>
                </div>

                <div className="skills-tags">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-tag">
                      <span>{skill.name}</span>
                      {skill.level && (
                        <span className="skill-badge">{skill.level}</span>
                      )}
                      {skill.status && (
                        <span
                          className="skill-badge"
                          style={{
                            background: 'rgba(99, 102, 241, 0.15)',
                            color: 'var(--accent-secondary)'
                          }}
                        >
                          {skill.status}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
