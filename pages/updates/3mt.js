import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import threeMTImage from './../../public/images/3mt.png';

const ThreeMT = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Three Minute Thesis (3MT) Competition</h1>
      <p className="text-muted">November 21, 2024</p>

      {/* Content Section */}
      <p>
        I had an incredible experience participating in the University-wide Three Minute Thesis (3MT) competition. 
        The event challenged me to distill my research into a concise and compelling three-minute presentation. 
        It was a fantastic opportunity to share my work with a broader audience and hear about the innovative research 
        being conducted by my peers. The energy and diversity of topics made the event both exciting and inspiring!
      </p>
      <p>
        Participating in 3MT not only honed my communication skills but also deepened my appreciation for the value of 
        effective science communication. Looking forward to more opportunities like this in the future!
      </p>
      <p>
        Learn more about the UO 3MT competition{' '}
        <a
          href="https://graduatestudies.uoregon.edu/forum/3mt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          here
        </a>.
      </p>

      {/* Image Section */}
      <div className="text-center mb-4">
        <figure>
          <img
            src={threeMTImage.src}
            alt="Three Minute Thesis Competition"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            The Secret Ingredient: How External Water Influences Volcanic Columns
          </figcaption>
        </figure>
      </div>
    </div>

    <Footer />
  </div>
);

export default ThreeMT;
