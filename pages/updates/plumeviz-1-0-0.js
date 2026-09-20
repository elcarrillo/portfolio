import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';

const PlumeVizRelease = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">
        PlumeViz 1.0.0 Released!
      </h1>

      <p className="text-muted">September 16, 2026</p>

      <p>
        PlumeViz has reached its first stable release.
      </p>

      <p>
        PlumeViz is a Python interface for the USGS Plumeria one-dimensional
        volcanic plume model. It provides tools for running Plumeria,
        organizing simulations, exploring parameter space, processing model
        output, and visualizing plume behavior.
      </p>

      <p>
        Reaching version 1.0.0 marks a major step in building PlumeViz as a
        modern, maintainable scientific software project while preserving its
        original goal: making volcanic plume modeling easier to use and
        explore.
      </p>

      <p>
        Development has continued beyond the first stable release, including
        expanded research tools and a browser-based interface that allows
        Plumeria simulations to be run without a local installation.
      </p>

      <div className="d-flex flex-wrap gap-2 my-4">
        <a
          href="https://plumeviz.streamlit.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Launch PlumeViz
        </a>

        <a
          href="https://github.com/elcarrillo/PlumeViz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          GitHub
        </a>

        <a
          href="https://doi.org/10.5281/zenodo.13685923"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          Software DOI
        </a>

        <a
          href="https://doi.org/10.30909/vol/ycra8102"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          Associated Paper
        </a>
      </div>
    </div>

    <Footer />
  </div>
);

export default PlumeVizRelease;
