import React from 'react';
import Link from 'next/link';
import { research } from '../config/config';
import { Footer } from '../components/Footer'; // Import Footer component

const Research = () => {
  return (
    <div>
      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link href="https://elcarrillo.github.io/portfolio" passHref>
          <a className="btn btn-primary">Back to Home</a>
        </Link>
      </div>

      {/* Header Section with Image and Title */}
      <div
        className="research-header position-relative text-center text-white"
        style={{
          backgroundImage: `url(${research.headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for contrast
          }}
        ></div>
        <div
          className="content position-relative"
          style={{
            zIndex: 2, // Ensures content appears above the overlay
            paddingTop: "100px",
          }}
        >
          <h1 className="fw-bold display-4">{research.title}</h1>
          <p className="lead">{research.description}</p>
        </div>
      </div>

      {/* Research Projects - Each project as a stacked section with alternating image alignment */}
      {research.projects.map((project, index) => (
        <div
          key={index}
          style={{
            backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8f9fa',
          }}
          className="project-section py-5"
        >
          <div className="container">
            <div className="row align-items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 mb-4 mb-md-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded custom-image-size"
                    />
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-primary fw-bold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6">
                    <h3 className="text-primary fw-bold">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="col-md-6 mb-4 mb-md-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded custom-image-size"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Research;
