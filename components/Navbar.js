import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Nav = ({ title }) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => (router.pathname === path ? 'active' : '');
  const isSectionActive = (id) => (router.asPath.endsWith(id) ? 'active' : '');

  const NavLink = ({ href, children, isDropdown = false }) => (
    <Link href={href} passHref>
      <a className={`nav-link ${isDropdown ? '' : isActive(href)}`}>{children}</a>
    </Link>
  );

  const DropdownLink = ({ href, children }) => (
    <Link href={href} passHref>
      <a className={`dropdown-item ${isSectionActive(href)}`}>{children}</a>
    </Link>
  );

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light sticky-nav ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
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
            {/* Dropdown for Main Sections */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="mainDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Edgar
              </a>
              <ul className="dropdown-menu" aria-labelledby="mainDropdown">
                {router.pathname === '/' ? (
                  <>
                    <DropdownLink href="#about">About</DropdownLink>
                    <DropdownLink href="#projects">Software Projects</DropdownLink>
                    <DropdownLink href="#pictures">Pictures</DropdownLink>
                    <DropdownLink href="#contact">Contact</DropdownLink>
                  </>
                ) : (
                  <li>
                    <Link href="/" passHref>
                      <a className="dropdown-item">Back to Main</a>
                    </Link>
                  </li>
                )}
              </ul>
            </li>

            {/* Research Dropdown */}
            {router.pathname === '/research' ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="researchDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Research
                </a>
                <ul className="dropdown-menu" aria-labelledby="researchDropdown">
                  <DropdownLink href="#projects">Projects</DropdownLink>
                  <DropdownLink href="#collaborations">Collaborations</DropdownLink>
                </ul>
              </li>
            ) : (
              <li className={`nav-item ${isActive('/research')}`}>
                <NavLink href="/research">Research</NavLink>
              </li>
            )}

            {/* Updates */}
            <li className={`nav-item ${isActive('/updates')}`}>
              <NavLink href="/updates">Updates</NavLink>
            </li>

            {/* Links */}
            <li className={`nav-item ${isActive('/links')}`}>
              <NavLink href="/links">Links</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
