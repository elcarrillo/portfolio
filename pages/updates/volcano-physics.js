import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import icelandFissure from './../../public/images/iceland-fissure.webp';
const VolcanoPhysics = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">
        What is Volcano Physics actually?
      </h1>

      <p className="text-muted">August 20, 2026</p>

      <p>
        Volcanoes are geological systems, but many of the questions we ask
        about how they work are really questions about physics.
      </p>

      <p>
        How does magma move through the crust? Why do some eruptions explode
        while others produce lava flows? How do heat, pressure, gravity, and
        material properties influence what happens before, during, and after
        an eruption?
      </p>

      <p>
        Volcano physics uses ideas from fluid mechanics, thermodynamics,
        mechanics, heat transfer, and other areas of physics to understand
        processes like these. Mathematics, experiments, and computer models
        give us ways to study systems that are often too hot, too deep, too
        large, or too dangerous to observe directly.
      </p>

<div className="text-center mb-4">
  <figure>
    <img
      src={icelandFissure.src}
      alt="Fissure eruption near Grindavík, Iceland"
      className="img-fluid rounded"
      style={{
        maxWidth: '80%',
        height: 'auto',
        border: '2px solid #ddd',
        borderRadius: '10px',
      }}
    />

    <figcaption className="mt-2 text-muted">
      January 2024 fissure eruption near Grindavík, Iceland.
      Photo by the Icelandic Meteorological Office.
    </figcaption>
  </figure>
</div>

      <p>
        Consider a fissure eruption. It may begin as a spectacular curtain of
        fire, with lava erupting from many vents, but within hours or days most
        of that activity can shut down and become concentrated at only a few
        locations. What causes that change?
      </p>

      <p>
        There may not be a single answer. Cooling can make some parts of the
        magma more viscous than others. Parts of the fissure can begin to
        solidify and close. Lava accumulating at the surface can change the
        pressure at individual vents. The dike feeding the eruption may also
        deliver different amounts of magma from place to place.
      </p>

      <p>
        All of these processes could produce a similar pattern at the surface while relying on very different physics. 
        That is the kind of problem volcano physics is useful for. We can take competing explanations, describe the underlying processes mathematically, 
        and ask which ones are actually capable of producing what we observe. 
      Some problems can be worked through with relatively simple equations, while others require computational methods to explore how the different processes interact.
      </p>

      <p>
        That same approach can be used across volcanic systems. The goal is
        not just to describe what a volcano did, but to understand the physical
        processes that made it behave that way.
      </p>

      <p>
    The storage and eruption of volcanic material present the problem. Volcano physics helps us investigate the processes behind it.      </p>
    </div>

    <Footer />
  </div>
);

export default VolcanoPhysics;