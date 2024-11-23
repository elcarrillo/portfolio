import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Nav = ({ title }) => {
  const router = useRouter();

  // Helper function to check active route
  const isActive = (path) => router.pathname === path ? 'active' : '';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Brand/Title */}
        <Link href="/" passHref>
          <a className="navbar-brand fw-bold">{title}</a>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Main Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Edgar
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {router.pathname === '/' && (
                  <>
                    <li>
                      <Link href="#about" passHref scroll={false}>
                        <a className="dropdown-item">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#projects" passHref scroll={false}>
                        <a className="dropdown-item">Software Projects</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#pictures" passHref scroll={false}>
                        <a className="dropdown-item">Pictures</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" passHref scroll={false}>
                        <a className="dropdown-item">Contact</a>
                      </Link>
                    </li>
                  </>
                )}
                {router.pathname !== '/' && (
                  <li>
                    <Link href="/" passHref>
                      <a className="dropdown-item">Back to Main</a>
                    </Link>
                  </li>
                )}
              </ul>
            </li>

            {/* Research */}
            <li className={`nav-item ${isActive('/research')}`}>
              <Link href="/research" passHref>
                <a className="nav-link">Research</a>
              </Link>
            </li>

            {/* Links */}
            <li className={`nav-item ${isActive('/links')}`}>
              <Link href="/links" passHref>
                <a className="nav-link">Links</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
