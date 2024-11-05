import React from 'react';
import Link from 'next/link';

export const Contact = ({ title, description, buttons }) => (
  <div id="contact" className="bg-white py-5 px-5">
    <div className="container">
      <h1 className="text-primary fw-bold">{title}</h1>
      <div className="px-sm-5">
        <p>{description}</p>
        <div>
          {buttons.map((button, index) => (
            <Link key={index} href={button.link} passHref>
              <a className={`btn my-1 mx-3 ${button.isPrimary ? 'btn-primary' : 'btn-outline-primary'}`}>
                {button.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
