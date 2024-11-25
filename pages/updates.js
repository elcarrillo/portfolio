import React, { useState } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Navbar';
import { updates } from '../config/config'; 
import headerImage from '/public/pescadero.jpg';


const Updates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sort updates by date (most recent first)
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Pagination calculation
  const totalPages = Math.ceil(sortedUpdates.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUpdates = sortedUpdates.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const featuredUpdates = sortedUpdates.slice(0, 2); // Top 2 updates for the featured section

  return (
    <div>
      <Nav title="Edgar" />

      {/* Header Section */}
      <div
        className="updates-header text-center text-white"
        style={{
          backgroundImage: `headerImage`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          position: "relative",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <div
          className="content position-relative"
          style={{
            zIndex: 2,
            paddingTop: "100px",
          }}
        >
          <h1 className="fw-bold display-4">Updates</h1>
          <div
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p className="lead">
              The updates below highlight moments and insights from my journey in science, teaching, and outreach.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Featured Updates Section */}
        <section aria-labelledby="featured-updates">
          <h2 id="featured-updates" className="text-primary fw-bold mb-4">
            Latest Updates
          </h2>
          <div className="row">
            {featuredUpdates.map((update, index) => (
              <article key={index} className="col-md-6 mb-4">
                <div className="card">
                  {update.image && (
                    <img
                      src={update.image}
                      alt={`Image for ${update.title}`}
                      className="card-img-top"
                      style={{
                        maxHeight: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{update.title}</h5>
                    <p className="card-text text-muted">{update.date}</p>
                    <p className="card-text">{update.snippet}</p>
                    {update.type === "internal" && (
                      <Link href={update.link} passHref>
                        <a className="btn btn-primary" aria-label={`Read more about ${update.title}`}>
                          Read More
                        </a>
                      </Link>
                    )}
                    {update.type === "external" && (
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

        {/* Updates Section */}
        <section aria-labelledby="updates-section" className="mt-5">
          <h2 id="updates-section" className="text-primary fw-bold mb-4">
            All Updates
          </h2>
          <div className="row">
            {currentUpdates.map((update, index) => (
              <article key={index} className="col-md-4 mb-4">
                <div className="card" style={{ minHeight: "300px" }}>
                  {update.image && (
                    <img
                      src={update.image}
                      alt={`Image for ${update.title}`}
                      className="card-img-top"
                      style={{
                        maxHeight: "200px",
                        width: "100%",
                        objectFit: "contain",
                        padding: "10px",
                      }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{update.title}</h5>
                    <p className="card-text text-muted">{update.date}</p>
                    <p className="card-text">{update.snippet}</p>
                    {update.type === "internal" && (
                      <Link href={update.link} passHref>
                        <a className="btn btn-primary" aria-label={`Read more about ${update.title}`}>
                          Read More
                        </a>
                      </Link>
                    )}
                    {update.type === "external" && (
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
