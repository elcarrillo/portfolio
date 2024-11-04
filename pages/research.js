import React from 'react';
import Link from 'next/link';
import { research } from '../config/config';

const Research = () => {
  return (
    <div>
      {/* Back to Home Button */}
      <div className="back-to-home">
        <Link href="/">
          <a className="btn btn-primary">Back to Home</a>
        </Link>
      </div>

      {/* Page Title and Description */}
      <div style={{ backgroundColor: '#f8f9fa' }} className="py-5 px-5 text-center">
        <h1 className="text-primary fw-bold">{research.title}</h1>
        <p>{research.description}</p>
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
    </div>
  );
};

export default Research;
