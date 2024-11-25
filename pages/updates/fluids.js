import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';

const EarthFluidsCourse = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Earth Fluids with Dr. David Furbish</h1>
      <p className="text-muted">Reflections on an Invaluable Learning Experience</p>

      <p>
      In Spring 2023, I had the privilege of taking the <strong>Earth Fluids</strong> course taught by 
      <strong> Dr. David Furbish </strong>, a distinguished Professor and Geophysicist at Vanderbilt University. Renowned for his expertise and 
      engaging teaching style, Dr. Furbish&apos;s passion for fluid dynamics in Earth systems made this course one of the most 
      impactful experiences of my graduate journey. His thought-provoking discussions and dynamic lectures inspired a 
      deeper appreciation for the complexities of fluid mechanics in geological contexts.
      </p>


      <p>
        The course provided a comprehensive foundation in fluid mechanics as applied to Earth processes, 
        covering topics ranging from groundwater flow to volcanic dynamics. For me, the most transformative 
        aspect was how the course bridged theoretical concepts with practical applications. Through in-depth 
        problem sets and stimulating discussions, I developed a deeper understanding of how to model complex 
        phenomena like pyroclastic density currents (PDCs) from the ground up.
      </p>

      <p>
        One of the most rewarding aspects of the course was the opportunity to discuss my research ideas 
        with Dr. Furbish during and after class. His guidance not only refined my understanding of fluid 
        dynamics but also gave me the confidence to build my own PDC model from scratch, a critical skill 
        that has shaped my current research trajectory.
      </p>

      {/* Embedded Google Drive Viewer */}
      <div className="text-center mb-4">
        <p>
          As part of this course, I developed a <strong>PDC model</strong> from scratch, incorporating the principles 
          and techniques I learned. You can explore the project in the viewer below:
        </p>
        <iframe
          src="https://drive.google.com/file/d/153MzqL1UO7mDQFfF9v1t0ox7lySazhn2/preview"
          style={{
            width: '80%',
            height: '600px',
            border: 'none',
          }}
          title="PDC Model Project"
        ></iframe>
        <p className="mt-2 text-muted">
          <small>
            View the full <strong>PDC Model Project</strong> embedded via Google Drive.
          </small>
        </p>
      </div>

      <p>
        Beyond the technical knowledge, the course also underscored the importance of curiosity and critical 
        thinking in scientific inquiry. Dr. Furbish&apos;s approachable teaching style and his ability to simplify 
        complex topics made this learning experience both enjoyable and intellectually enriching.
      </p>

      <p>
        This course not only equipped me with technical expertise but also provided the tools to approach 
        Earth systems problems with creativity and rigor.
      </p>
    </div>

    <Footer />
  </div>
);

export default EarthFluidsCourse;
