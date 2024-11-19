import React, { useEffect } from 'react';
import Link from 'next/link';

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
    <div id="contact" className="bg-white py-5 px-5">
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
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>
          <Link href="https://github.com/elcarrillo/portfolio" passHref>
            <a>. elcarrillo</a>
          </Link>
          . Open sourced with love under{" "}
          <Link href="https://github.com/elcarrillo/portfolio/blob/main/LICENSE" passHref>
            <a>MIT</a>
          </Link>{" "}
          License &copy; 2021
        </small>
      </div>
    </footer>
  );
};
