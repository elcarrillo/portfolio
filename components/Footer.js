import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


export const Contact = ({ title, description, buttons }) => {
  useEffect(() => {
    const googleButton = buttons.find((btn) => btn.type === "google-calendar");
    if (googleButton && !document.getElementById('google-calendar-script')) {
      // Add the stylesheet
      const link = document.createElement('link');
      link.id = 'google-calendar-style';
      link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      // Add the script
      const script = document.createElement('script');
      script.id = 'google-calendar-script';
      script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
      script.async = true;
      script.onload = () => {
        const target = document.getElementById('google-calendar-button');
        if (target) {
          calendar.schedulingButton.load({
            url: googleButton.link,
            color: '#365B6D', // Your primary theme color
            label: googleButton.title,
            target,
          });
        }
      };
      document.body.appendChild(script);
    }
  }, [buttons]);

  return (
    <div
      id="contact"
      className="py-5 px-5"
      style={{
        backgroundColor: '#f8f9fa', // Light gray background
      }}
    >
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <div className="px-sm-5">
          <p>{description}</p>
          {/* Flex container for buttons */}
          <div className="d-flex flex-wrap align-items-center">
            {buttons.map((button, index) => {
              if (button.type === "google-calendar") {
                return (
                  <div
                    id="google-calendar-button"
                    key={`google-calendar-${index}`}
                    className="my-3 me-3"
                  ></div>
                );
              }
              return (
                <Link key={index} href={button.link} passHref>
                  <a
                    className={`btn my-1 mx-3 ${button.isPrimary ? 'btn-primary' : 'btn-outline-primary'}`}
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
    <footer className="bg-dark text-light py-4"> {/* Changed to a darker background */}
      <div className="container">
        <div className="row">
          {/* Branding Section */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">Edgar Carrillo</h5>
            <p className="mb-0"> Phd Student | Volcano Physicist </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="https://elcarrillo.github.io/portfolio/" passHref>
                  <a className="text-light text-decoration-none">Main Page</a>
                </Link>
              </li>
              <li>
                <Link href="https://elcarrillo.github.io/portfolio/research" passHref>
                  <a className="text-light text-decoration-none">Research Page</a>
                </Link>
              </li>
            </ul>
          </div>

 
          {/* Social Media Links */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold">Follow Me</h5>
            <Link href="https://github.com/elcarrillo" passHref>
              <a className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/elcarrillo/" passHref>
              <a className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </Link>
            <Link href="https://twitter.com/elcarrillo" passHref>
              <a className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/elcarr1llo/" passHref>
              <a className="text-light" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-4">
          <small>
            Open sourced with love under{" "}
            <Link href="https://github.com/elcarrillo/portfolio/blob/main/LICENSE" passHref>
              <a className="text-light">MIT</a>
            </Link>{" "}
            License &copy; elcarrillo  {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </footer>
  );
};

