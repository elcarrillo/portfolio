import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import fossilImage from './../../public/images/fossil.png';
import richlandDroneImage from './../../public/images/richland_drone.png';

const GeologyLabExperience = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Instructing Intro to Physical Geology Lab</h1>
      <p className="text-muted">Spring Semester, 2024</p>

      <p>
        During the <strong>Spring 2024 semester</strong> at <strong>Vanderbilt University</strong>, 
        I had the privilege of serving as the instructor for the <strong>Intro to Physical Geology Lab</strong>. 
        This course introduces undergraduate students to fundamental geological concepts through hands-on laboratory exercises 
        and immersive fieldwork, bridging theory and real-world applications.
      </p>
      <p>
        A highlight of the semester was leading field trips to two exceptional geological sites in Nashville, TN:
      </p>
      <ul>
        <li>
          <strong>Richland Creek:</strong> Students conducted a flood risk and water quality analysis, 
          gaining valuable insights into hydrology and environmental geology. They also examined the lasting impacts of the 
          2010 Tennessee floods on the local ecosystem and infrastructure.
        </li>
        <li>
          <strong>Fort Negley:</strong> At this historic site, students explored fossil-rich limestone beds, 
          delving into stratigraphy, sedimentology, and fossil identification. The site also provided a unique opportunity to 
          discuss the intersection of geology, human history, and cultural heritage.
        </li>
      </ul>
      <p>
        These field trips fostered a deeper appreciation of the geological processes shaping the local environment 
        and helped students develop their observational and analytical skills. Guiding them through these experiences was deeply rewarding 
        and reinforced my passion for geology and education.
      </p>
      <p>
        I look forward to continuing to inspire curiosity and discovery through hands-on, experiential learning in both 
        the field and the lab.
      </p>
      <p>
        Special thanks to Dr. Annie Klyce, Senior Lecturer and Lab Coordinator, for handling the logistics 
        and ensuring the lab sessions and field trips ran smoothly.
      </p>

      {/* Image Section with Captions */}
      <div className="text-center mb-4">
        <figure>
          <img
            src={fossilImage.src}
            alt="Fossil from Fort Negley"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            Fossilized coral from Fort Negley, showcasing the site&apos;s ancient marine history 
            (Approximately 450 million years old).
          </figcaption>
        </figure>
      </div>
      <div className="text-center mb-4">
        <figure>
          <img
            src={richlandDroneImage.src}
            alt="Richland Creek Drone Shot"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            A drone shot of Richland Creek. Photo Credit: Vanderbilt University. 
            <a 
              href="https://www.instagram.com/p/C6KI1FnuPms/?img_index=5&igsh=MXJwbDgxN2IwcDVkZQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary"
            >
              View original post
            </a>.
          </figcaption>
        </figure>
      </div>
    </div>

    <Footer />
  </div>
);

export default GeologyLabExperience;
