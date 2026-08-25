import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const GoogleCalendarButton = ({ url, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary my-1 mx-3"
        onClick={() => setIsOpen(true)}
      >
        {label}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              height: '85vh',
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close scheduling window"
              style={{
                position: 'absolute',
                top: '10px',
                right: '14px',
                zIndex: 10,
                border: 'none',
                background: '#fff',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '24px',
                lineHeight: '30px',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              ×
            </button>

            <iframe
              src={url}
              title="Schedule a meeting"
              style={{
                border: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export const Contact = ({
  title,
  description,
  buttons,
  office,
  address,
  email,
  phone,
  logo,
//  webfoot,
}) => {
  return (
    <div
      id="contact"
      className="py-5 px-5"
      style={{
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="container">
        <h1 className="text-primary fw-bold mb-4">{title}</h1>

        <div className="row align-items-center g-5">

          {/* Left side */}
          <div className="col-lg-7">
            <p
              className="mb-4"
              style={{
                fontSize: '1.05rem',
                lineHeight: '1.7',
              }}
            >
              {description}
            </p>

            <div className="mb-4">
              <p className="fw-bold mb-1">{office}</p>

              <p className="mb-3">
                {address}
              </p>

              <p className="mb-1">
                <a
                  href={`mailto:${email}`}
                  className="text-decoration-none"
                >
                  {email}
                </a>
              </p>

              <p className="mb-0">
                <a
                  href="tel:5413578079"
                  className="text-decoration-none"
                >
                  {phone}
                </a>
              </p>
            </div>

            <div className="d-flex flex-wrap align-items-center">
              {buttons.map((button, index) => {
                if (button.type === 'google-calendar') {
                  return (
                    <GoogleCalendarButton
                      key={index}
                      url={button.link}
                      label={button.title}
                    />
                  );
                }

                return (
                  <Link key={index} href={button.link} passHref>
                    <a
                      className={`btn my-1 mx-3 ${
                        button.isPrimary
                          ? 'btn-primary'
                          : 'btn-outline-primary'
                      }`}
                    >
                      {button.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>

{/* University of Oregon signature */}
<div className="col-lg-5 mt-4 mt-lg-0">
  <div
    style={{
      minHeight: '190px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 30px',
    }}
  >
    <img
      src={logo}
      alt="University of Oregon"
      style={{
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        display: 'block',
        transform: 'translateX(-60px)',
      }}
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="site-footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">

          {/* Branding Section */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">Edgar Carrillo</h5>
            <p className="mb-0">PhD Candidate | Volcano Physicist</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <Link href="/" passHref>
                  <a className="footer-link">
                    Main Page
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/research" passHref>
                  <a className="footer-link">
                    Research Page
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Follow Me</h5>

            <Link href="https://github.com/elcarrillo" passHref>
              <a
                className="footer-social me-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>

            <Link
              href="https://www.linkedin.com/in/elcarrillo/"
              passHref
            >
              <a
                className="footer-social me-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </Link>

            <Link href="https://x.com/edgarlcarrillo" passHref>
              <a
                className="footer-social me-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>

            <Link
              href="https://www.instagram.com/elcarr1llo/"
              passHref
            >
              <a
                className="footer-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright text-center mt-4">
          <small>
            Open sourced with love under{' '}
            <Link
              href="https://github.com/elcarrillo/portfolio/blob/main/LICENSE"
              passHref
            >
              <a className="footer-link">
                MIT
              </a>
            </Link>{' '}
            License &copy; elcarrillo {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </footer>
  );
};