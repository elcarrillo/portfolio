import React, { useState } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Navbar';
import { updates } from '../config/config';
import headerImage from '/public/pescadero.jpg';

const Updates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const itemsPerPage = 12;

  // Sort updates by date (most recent first)
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Generate unique years for the filter
  const years = Array.from(new Set(updates.map((update) => new Date(update.date).getFullYear())));

  // Filter updates by type and year
  const filteredUpdates = sortedUpdates.filter((update) => {
    const matchesType =
      typeFilter === 'All' ||
      (typeFilter === 'Blog' && update.type === 'internal') ||
      (typeFilter === 'Updates' && update.type !== 'internal');
    const matchesYear =
      yearFilter === 'All' || new Date(update.date).getFullYear().toString() === yearFilter;
    return matchesType && matchesYear;
  });

  // Pagination calculation
  const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUpdates = filteredUpdates.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const handleYearFilterChange = (event) => {
    setYearFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const featuredUpdates = sortedUpdates.slice(0, 2); // Most recent 2 updates

  return (
    <div>
      <Nav title="Edgar" />

      {/* Header Section */}
      <div
        className="updates-header text-center text-white"
        style={{
          backgroundImage: `url(${headerImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          position: 'relative',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div
          className="content position-relative"
          style={{
            zIndex: 2,
            paddingTop: '100px',
          }}
        >
          <h1 className="fw-bold display-4">Updates</h1>
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <p className="lead">
              The updates below capture key moments and insights from my journey in science, teaching, and outreach. Click "Read More" to dive deeper into the stories!
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Latest Updates Section */}
        <section aria-labelledby="featured-updates">
          <h2 id="featured-updates" className="text-primary fw-bold mb-4">
            Latest Updates
          </h2>
          <div className="row">
            {featuredUpdates.map((update, index) => (
              <article key={index} className="col-md-6 mb-4">
                <div className="card shadow">
                  {update.image && (
                    <img
                      src={update.image}
                      alt={`Image for ${update.title}`}
                      className="card-img-top"
                      style={{
                        maxHeight: '200px',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{update.title}</h5>
                    <p className="card-text text-muted">{update.date}</p>
                    <p className="card-text">{update.snippet}</p>
                    {update.type === 'internal' && (
                      <Link href={update.link} passHref>
                        <a className="btn btn-primary" aria-label={`Read more about ${update.title}`}>
                          Read More
                        </a>
                      </Link>
                    )}
                    {update.type === 'external' && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Learn more about ${update.title}`}
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Filter Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <label htmlFor="typeFilter" className="me-2">
              Filter by Type:
            </label>
            <select
              id="typeFilter"
              value={typeFilter}
              onChange={handleTypeFilterChange}
              className="form-select w-auto"
            >
              <option value="All">All</option>
              <option value="Blog">Blog</option>
              <option value="Updates">Updates</option>
            </select>
          </div>
          <div>
            <label htmlFor="yearFilter" className="me-2">
              Filter by Year:
            </label>
            <select
              id="yearFilter"
              value={yearFilter}
              onChange={handleYearFilterChange}
              className="form-select w-auto"
            >
              <option value="All">All</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Updates Section */}
        <section aria-labelledby="updates-section" className="mt-5">
          <h2 id="updates-section" className="text-primary fw-bold mb-4">
            All Updates
          </h2>
          <div className="row">
            {currentUpdates.map((update, index) => (
              <article key={index} className="col-md-4 mb-4">
                <div className="card" style={{ minHeight: '300px' }}>
                  {update.image && (
                    <img
                      src={update.image}
                      alt={`Image for ${update.title}`}
                      className="card-img-top"
                      style={{
                        maxHeight: '200px',
                        width: '100%',
                        objectFit: 'contain',
                        padding: '10px',
                      }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{update.title}</h5>
                    <p className="card-text text-muted">{update.date}</p>
                    <p className="card-text">{update.snippet}</p>
                    {update.type === 'internal' && (
                      <Link href={update.link} passHref>
                        <a className="btn btn-primary" aria-label={`Read more about ${update.title}`}>
                          Read More
                        </a>
                      </Link>
                    )}
                    {update.type === 'external' && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Learn more about ${update.title}`}
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  aria-current={currentPage === index + 1 ? 'page' : undefined}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    aria-label={`Go to page ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Updates;
