import React, { useState } from 'react';
import { Download, Mail, Copy, Check, X, FileText } from 'lucide-react';
import { personalData } from '../data/personalData';

export function handleResumeDownload(onPdfMissing) {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.download = 'Kashish_Mishra_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '460px',
          padding: '2rem',
          position: 'relative',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)'
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            color: 'var(--text-muted)',
            padding: '0.4rem'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(56, 189, 248, 0.15)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FileText size={22} />
          </div>
          <div>
            <h3 id="resume-modal-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Resume Availability
            </h3>
            <span style={{ fontSize: '0.82rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
              Kashish Mishra • Full Stack Developer
            </span>
          </div>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          The resume PDF file is currently being updated with recent project additions. You can request the latest copy directly via email.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={personalData.socials.email}
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            <Mail size={18} /> Request Resume via Email
          </a>

          <button
            onClick={handleCopyEmail}
            className="btn btn-secondary"
            style={{ width: '100%' }}
          >
            {copied ? <Check size={18} color="var(--status-success)" /> : <Copy size={18} />}
            {copied ? "Email Copied!" : `Copy Email (${personalData.email})`}
          </button>
        </div>

        <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Tip: Place <code>public/resume.pdf</code> in the project directory to enable direct downloads.
        </div>
      </div>
    </div>
  );
}
