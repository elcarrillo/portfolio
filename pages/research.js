import React from 'react';
import Link from 'next/link';
import { research } from '../config/config';
import { Footer } from '../components/Footer'; // Import Footer component
import { Nav } from '../components/Navbar'; // Import Navbar component

const Research = () => {
  return (
    <div>
      {/* Navbar */}
      <Nav title="Edgar" links={[]} />

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
      <div id="projects">
        {research.projects.map((project, index) => (
          <div
            key={index}
            className={`project-section py-5 ${index % 2 === 0 ? '' : 'alt'}`} // Add "alt" class for alternating sections
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

      {/* Collaborations Section */}
      <div id="collaborations" className="collaborations-section py-5">
        <div className="container">
          <h2 className="text-primary fw-bold">Collaborations</h2>
          <p className="mb-4">
            My research has greatly benefited from collaborations with talented scientists and institutions. Additionally, my academic and professional growth has been supported by the mentorship and development opportunities provided by the Fisk-Vanderbilt Bridge Program.
          </p>

          <p className="mb-4">
            Below, I highlight the individuals I have had the privilege to work with on various scientific projects.
          </p>

          <div className="row">
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Dr. Leif 
                  Karlstrom</strong> – University of Oregon
                  <p>Current Doctoral Advisor/Mentor</p>
                </li>
                <li className="mb-3">
                  <strong>Dr. Kristen Fauria</strong> – Vanderbilt University
                  <p>Mentor and Advisor for Masters Thesis</p>
                </li>
                <li className="mb-3">
                  <strong>Dr. Guil Gualda</strong> – Vanderbilt University
                  <p>Mentor and Thesis Committee Member</p>
                </li>
                <li className="mb-3">
                  <strong>Liam Kelly</strong> – Vanderbilt University
                  <p>Collaborator</p>
                </li>
                <li className="mb-3">
                  <strong>Sarah Ward</strong> – Vanderbilt University
                  <p>Collaborator</p>
                </li>
                <li className="mb-3">
                  <strong>Dr. Tushar Mittal</strong> – Penn State
                  <p>Collaborator</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Dr. Larry Mastin</strong> – USGS, Cascades Volcano Observatory (now retired) 
                  <p>Collaborator</p>
                </li>
                <li className="mb-3">
                  <strong>Anna Ruefer</strong> – Stanford University
                  <p>Collaborator</p>
                </li>
                <li className="mb-3">
                  <strong>Sarah Hickernell</strong> – Stanford University
                  <p>Collaborator</p>
                </li>
                <li className="mb-3">
                  <strong>Dr. Heather Winslow</strong> – USGS, Hawaii Volcano Observatory
                  <p>Collaborator</p>
                </li>
                <li className="mb-3">
                  <strong>Dr. Phillip Ruprecht</strong> – University of Nevada, Reno
                  <p>Collaborator</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Research;
