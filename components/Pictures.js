import React from 'react';
import Image from 'next/image';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Pictures = ({ title, description, images }) => {
  return (
    <div id="pictures" className="bg-white py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>
        <p className="mb-5">{description}</p>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="col-sm-4 mb-4">
              <div className="card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}      // Adjust width as needed
                  height={500}     // Adjust height as needed
                  layout="responsive"  // Optional: maintains responsive layout
                  objectFit="cover"    // Ensures image covers the container proportionally
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
