import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { personalData } from '../data/personalData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (status.error) setStatus(prev => ({ ...prev, error: null }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name.trim()) {
    setStatus({
      submitting: false,
      submitted: false,
      error: 'Please enter your name.',
    });
    return;
  }

  if (!formData.email.trim() || !validateEmail(formData.email)) {
    setStatus({
      submitting: false,
      submitted: false,
      error: 'Please enter a valid email address.',
    });
    return;
  }

  if (!formData.message.trim()) {
    setStatus({
      submitting: false,
      submitted: false,
      error: 'Please enter your message.',
    });
    return;
  }

  setStatus({
    submitting: true,
    submitted: false,
    error: null,
  });

  try {
    await emailjs.send(
      'service_nz1m8fx',
      'template_uumwvqb' ,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      {
        publicKey: 'Agp_O44k40qInpRMk',
      }
    );

    setStatus({
      submitting: false,
      submitted: true,
      error: null,
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  } catch (error) {
    console.error('EmailJS Error:', error);

    setStatus({
      submitting: false,
      submitted: false,
      error: 'Failed to send message. Please try again.',
    });
  }
};

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Contact
          </span>
          <h2 className="section-title">
            Let's <span className="accent">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project, opportunity, or collaboration in mind? I'd love to hear from you. Feel free to reach out and let's connect to discuss how we can work together and build something meaningful.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                Contact Details
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Feel free to email me directly or reach out through my social channels. I respond as quickly as possible.
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Email Address</span>
                    <a href={personalData.socials.email} style={{ fontWeight: 700, color: 'var(--accent-primary)', fontSize: '0.98rem' }}>
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Location</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                      Lucknow, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                Connect On Professional Networks
              </div>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
              Send a Direct Message
            </h3>

            {status.submitted && (
              <div className="form-alert success" role="alert">
                <CheckCircle2 size={18} />
                <span>Message sent successfully! Thank you for reaching out.</span>
              </div>
            )}

            {status.error && (
              <div className="form-alert error" role="alert">
                <AlertCircle size={18} />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Full Name <span style={{ color: 'var(--accent-primary)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span style={{ color: 'var(--accent-primary)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message <span style={{ color: 'var(--accent-primary)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
                disabled={status.submitting}
              >
                {status.submitting ? (
                  'Preparing Message...'
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
