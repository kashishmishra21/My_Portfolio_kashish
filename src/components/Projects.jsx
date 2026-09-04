import React from 'react';
import { FolderGit2, Check, ExternalLink, BookOpen, Wallet } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { GithubIcon } from './SocialIcons';

const projectIconMap = {
  pushtakshare: BookOpen,
  gullakh: Wallet
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} /> Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="accent">Projects</span>
          </h2>
          <p className="section-subtitle">
            Applications built to solve practical real-world problems.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => {
            const IconComp = projectIconMap[project.id] || FolderGit2;
            return (
              <div key={project.id} className="glass-card project-card">
                <div className="project-header">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComp size={22} />
                  </div>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-features">
                  <div className="feature-title">Key Capabilities</div>
                  <ul className="feature-list">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <Check size={16} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}
                    >
                      <GithubIcon size={16} /> Repository
                    </a>
                  ) : (
                    <span className="link-disabled-badge">Source Repository Available Upon Request</span>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ fontSize: '0.82rem', padding: '0.45rem 0.9rem' }}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
