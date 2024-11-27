import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import windRose from './../../public/images/hunga-windrose.png';
import atmosphericProfile from './../../public/images/hunga_2022_atmospheric_profile.png';

const PlumeVizBetaPreview = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Previewing PlumeViz Beta: Atmospheric Data Visualization Module</h1>
      <p className="text-muted">A sneak peek into the upcoming features of PlumeViz Beta 1.1.0</p>

      <p>
        The 2022 Hunga eruption highlighted the importance of understanding volcanic plume dynamics and their interaction with atmospheric conditions. To make analyzing such complex phenomena more accessible, the upcoming <strong>PlumeViz 1.1.0</strong> includes an atmospheric data visualization module. 
      </p>

    <p>
      PlumeViz is a cross-platform, user-friendly interface for the Fortran90 version of Plumeria, tailored for volcanologists and atmospheric scientists. As part of its beta release, the software includes a new module for creating insightful visualizations. For example, users can generate a <strong>wind rose plot</strong> to analyze wind speed and direction, or <strong>vertical atmospheric profiles</strong> displaying relative humidity, temperature, and wind conditions—like those showcased here from the Hunga eruption dataset.
    </p>
    <p>
      The atmospheric data used in these visualizations is specific to the Hunga Volcano, Tonga, during the January 15, 2022, eruption. It was sourced from the Global Forecast System (GFS) 0.5-degree model, with a posting date of January 15, 2022, at 0000 UTC.
    </p>


      {/* Image Section with Captions */}
      <div className="text-center mb-4">
        <figure>
          <img
            src={windRose.src}
            alt="Wind Rose for 2022 Hunga Eruption"
            className="img-fluid rounded"
            style={{
              maxWidth: '50%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            Wind rose plot showing wind speed and direction during the Jan, 15, 2022 Hunga eruption.
          </figcaption>
        </figure>
      </div>

      <div className="text-center mb-4">
        <figure>
          <img
            src={atmosphericProfile.src}
            alt="Atmospheric Profile for 2022 Hunga Eruption"
            className="img-fluid rounded"
            style={{
              maxWidth: '50%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
<figcaption
  className="mt-2 text-muted"
  style={{
    maxWidth: '60%', // Ensures the caption width is contained
    margin: '0 auto', // centering margin
    textAlign: 'left', // Aligns text to the left
  }}
>
    Vertical profiles of relative humidity, temperature, and wind data. Note the highlighted region corresponding to the umbrella cloud altitudes, 17–31 km. Umbrella heights are taken from Gupta et al. (2022). <em>Commun. Earth Environ.</em>, 3, 314. <a href="https://doi.org/10.1038/s43247-022-00606-3" target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s43247-022-00606-3</a>.
    </figcaption>

        </figure>
      </div>

      <p>
        With PlumeViz&apos;s atmospheric data visualization module, you can:
        <ol>
          <li>Upload soudning datasets from NOAA or use synthetic data to simulate atmospheic conditions.</li>
          <li>Generate visualizations of atmospheic profiles quickly and intuitively.</li>
        </ol>
      </p>

      <p>
        The beta version of PlumeViz 1.1.0 will include:
        <ol>
          <li>An intuitive interface for running Plumeria with enhanced visualization capabilities.</li>
          <li>Support for plotting volcanic plume and atmospheric datasets.</li>
          <li>Tools for annotating, customizing, and exporting high-quality visualizations.</li>
        </ol>
      </p>

      <p>
        This module is just one part of the PlumeViz suite, designed to streamline the workflow for exploring volcanic plume dynamics. Stay tuned for the beta release!
      </p>

    </div>

    <Footer />
  </div>
);

export default PlumeVizBetaPreview;
