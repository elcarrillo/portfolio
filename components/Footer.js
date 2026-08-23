import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';


export const Contact = ({ title, description, buttons }) => {
  return (
    <div
      id="contact"
      className="py-5 px-5"
      style={{
        backgroundColor: '#f8f9fa',
      }}
    >
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>

        <div className="px-sm-5">
          <p>{description}</p>

          <div className="d-flex flex-wrap align-items-center">
            {buttons.map((button, index) => {
              if (button.type === 'google-calendar') {
                return (
                  <a
                    key={index}
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn my-1 mx-3 ${
                      button.isPrimary
                        ? 'btn-primary'
                        : 'btn-outline-primary'
                    }`}
                  >
                    {button.title}
                  </a>
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
      </div>
    </div>
  );
};


export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
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
                <Link
                  href="https://elcarrillo.github.io/portfolio"
                  passHref
                >
                  <a className="text-light text-decoration-none">
                    Main Page
                  </a>
                </Link>
              </li>

              <li>
                <Link
                  href="https://elcarrillo.github.io/portfolio/research"
                  passHref
                >
                  <a className="text-light text-decoration-none">
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
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>

            <Link
              href="https://www.linkedin.com/in/elcarrillo/"
              passHref
            >
              <a
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </Link>

            <Link href="https://x.com/edgarlcarrillo" passHref>
              <a
                className="text-light me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>

            <Link
              href="https://www.instagram.com/elcarr1llo/"
              passHref
            >
              <a
                className="text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <small>
            Open sourced with love under{' '}
            <Link
              href="https://github.com/elcarrillo/portfolio/blob/main/LICENSE"
              passHref
            >
              <a className="text-light">MIT</a>
            </Link>{' '}
            License &copy; elcarrillo {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </footer>
  );
};