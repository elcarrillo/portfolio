import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';

const BootcampExperience = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Leading the Computational Physics Bootcamp</h1>
      <p className="text-muted">August 1, 2022</p>

      <p>
        Teaching my first course as a graduate instructor was an incredible experience! The 
        <strong> Computational Physics Bootcamp</strong> is a rigorous two-week summer program 
        designed to equip incoming master&apos;s students in the Fisk-Vanderbilt Bridge Program with 
        essential computational skills.
      </p>
      <p>
        During the bootcamp, I introduced students to fundamental programming concepts, 
        numerical methods, and hands-on problem-solving. It was deeply rewarding to witness 
        students grow confident in their ability to apply computational techniques to tackle 
        complex physical problems.
      </p>
      <p>
        This experience enhanced my passion for teaching and underscored the importance of 
        mentorship in supporting students as they transition to graduate-level studies. 
        I am proud to have played a role in their academic journeys and look forward to future 
        teaching opportunities.
      </p>
      <p>
        Explore the course materials and projects I developed for this bootcamp using the link below:
      </p>
      <a
        href="https://github.com/elcarrillo/computational_bootcamp_material"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View Bootcamp Materials
      </a>
    </div>

    <Footer />
  </div>
);

export default BootcampExperience;
