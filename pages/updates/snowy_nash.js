import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import snowyNash from './../../public/images/snow.gif';
import bridgeCrew from './../../public/images/santa_cruz.JPG';

const AcademicJourney = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Cold weather: Lessons in Adaptability</h1>
      <p className="text-muted">Reflections on pursuing an academic life</p>

      <p>
        I never thought I&apos;d have to deal with snowstorms, tornado warnings, and torrential rain—all in one year. Coming from 
        the deserts of Southern California and the moderate climate of the Bay Area, adapting to the unpredictable weather 
        of Nashville has been a challenge. While snow and icy roads might be rare in the South, they&apos;ve been a stark reminder 
        of how much academia asks us to adapt—not just to new intellectual challenges, but to entirely new environments.
      </p>

      <p>
        When I embarked on my journey into academia, I never anticipated how much moving around would define it. 
        From the Bay Area to SoCal, and beyond, the constant uprooting has been both a challenge and a catalyst for growth. 
        It&apos;s a reality many in this field face, driven by the scarcity of programs, postdoc positions, and faculty roles 
        in specialized fields.
      </p>

      <p>
        My first major leap came when I moved to <strong>Nashville, Tennessee</strong>, sight unseen, to begin graduate school. 
        The excitement of starting a new chapter was mixed with uncertainty. A new city, new community, and new academic environment 
        brought challenges, but they also shaped me in ways I hadn&apos;t imagined.
      </p>

      <div className="text-center mb-4">
        <figure>
          <img
            src={snowyNash.src}
            alt="Snowy day in Nashville"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            A rare snowy day in Nashville, a city that quickly became my home away from home.
          </figcaption>
        </figure>
      </div>

      <p>
        Before Nashville, my path was already marked by big moves. I started at San Bernardino Valley College and later 
        transferred to <strong>California State University, San Bernardino</strong>, where I completed my bachelor&apos;s degree. 
        From there, I moved back up north (born in French Camp, CA) to the <strong>Palo Alto</strong>, diving into the fast-paced world of tech in <strong>Silicon Valley</strong>. 
        After six years in the desert, adjusting to the tech culture and energy was eye-opening.
      </p>

      <p>
        These transitions haven&apos;t been easy. Each move meant leaving behind friends, family, and familiar routines. But they 
        also brought invaluable lessons about resilience and adaptability. I&apos;ve learned that wherever I go, community is key. 
        Colleagues who become friends, mentors who offer guidance, and shared moments of connection transform an unfamiliar city 
        into a place where you belong.
      </p>

      <div className="text-center mb-4">
        <figure>
          <img
            src={bridgeCrew.src}
            alt="California beach"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            Santa Cruz, CA. A day before driving from Silicon Valley to Music City to start graduate school.
          </figcaption>
        </figure>
      </div>

<p>
  Moving frequently has taught me a simple truth: while I&apos;m driven by a passion for science, the journey is equally about 
  the experiences and the people you share it with. Each city I&apos;ve called home has come with its own set of challenges, but also 
  incredible opportunities to grow as a researcher, mentor, and individual.
</p>

<p>
  For anyone considering this path, be prepared to step outside your comfort zone. The sacrifices (leaving behind friends, family, 
  and familiarity) are undeniable. Yet, so are the rewards. The connections you forge, the knowledge you gain, and the sense of 
  purpose that accompanies pursuing a career in academia make it all worthwhile.
</p>

<p>
  And who knows? Your next move might lead you to a place you never want to leave. Whether you settle down or continue exploring, 
  this journey will challenge you in ways that shape you, and help you grow, in ways you never imagined.
</p>

    </div>

    <Footer />
  </div>
);

export default AcademicJourney;
