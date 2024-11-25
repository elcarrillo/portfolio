import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import uoCampus from './../../public/images/lava_tube.jpg'; 
import smithRock from './../../public/images/smith_rock.png'; 

const WritingRetreat = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Writing Retreat at the University of Oregon</h1>
      <p className="text-muted">Reflections on a Productive and Inspiring Experience</p>

      <p>
        In late May 2023, I had the incredible opportunity to participate in a writing retreat at the 
        <strong> University of Oregon (UO)</strong>. This enriching experience was made possible by our advisor, 
        Dr. Kristen Fauria, who was on sabbatical as part of the prestigious <strong>Meierjurgen Visiting Fellowship</strong>. 
        She invited me and my Sarah Ward (PhD student in Fauria Lab) to join her at UO, where we spent two weeks immersed in writing, brainstorming, 
        and refining our research projects, culminating in significant progress on our MS theses.
      </p>

      <div className="text-center mb-4">
        <figure>
          <img
            src={uoCampus.src}
            alt="Exploring a Lava Tube in the Cascades"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            Exploring a lava tube in the Cascades during our time at UO. From left to right: Sara Ward, Kristen Fauria, Edgar Carrillo.
          </figcaption>
        </figure>
      </div>

      <p>
        The retreat was not solely about writing as it also provided us with the opportunity to explore the breathtaking natural 
        beauty of the Pacific Northwest. As part of the experience, we ventured into the nearby <strong>Cascades</strong>, 
        where we examined lava flows and explored lava tubes. This fieldwork deepened my appreciation for the geological processes 
        I study and added a unique, hands-on perspective to my research.
      </p>

    <p>
        Beyond the fieldwork, the retreat served as a dedicated time to focus on the craft of academic writing. The serene 
        environment at UO and the support from my lab mate made the process even more fulfilling. Together, we tackled 
        challenging sections of our manuscripts, brainstormed figures, and refined our arguments, all while immersed in the 
        inspiring academic atmosphere of UO and savoring the excellent coffee Oregon is known for.
    </p>

      <p>
        Participating in the retreat also highlighted the importance of community and collaboration in the writing process. 
        Whether it was exchanging feedback or brainstorming ideas, these interactions underscored the value of having a supportive 
        academic network. Our advisor’s guidance and the camaraderie with my lab mate made this experience truly memorable.
      </p>

      <p>
        I left the retreat feeling re-energized and with significant progress on my thesis. This experience was a powerful 
        reminder of the importance of stepping away from daily routines to focus deeply on research, writing, and the environments 
        that inspire our work.
      </p>
    
    <div className="text-center mb-4">
      <figure>
        <img
          src={smithRock.src}
          alt="Basalt Lava Flows at Smith Rock"
          className="img-fluid rounded"
          style={{
            maxWidth: '80%',
            height: 'auto',
            border: '2px solid #ddd',
            borderRadius: '10px',
          }}
        />
        <figcaption className="mt-2 text-muted">
          A visit to Smith Rock offered an incredible view of basalt lava flows.
        </figcaption>
      </figure>
    </div>


    </div>



    <Footer />
  </div>
);

export default WritingRetreat;
