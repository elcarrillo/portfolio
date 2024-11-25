import React from 'react';
import { Footer } from '../../components/Footer';
import { Nav } from '../../components/Navbar';
import bridgeCrew from './../../public/images/bridge_crew.png';
import soccer from './../../public/images/soccer.png';
import friends from './../../public/images/bonfire.png';
import cabin from './../../public/images/cabin.png';

const TakeABreak = () => (
  <div>
    <Nav title="Edgar" />

    <div className="container py-5">
      <h1 className="text-primary fw-bold">Take a Break: Building Community and Finding Balance</h1>
      <p className="text-muted">Something I learned as a third year grad student</p>

<p>
  Pursuing a PhD is no walk in the park. Between research deadlines, coursework, and teaching responsibilities, 
  there&apos;s always something demanding your attention. But if there&apos;s one thing I&apos;ve come to understand, it&apos;s this: 
  <strong>you can&apos;t pour from an empty cup</strong>. Taking the time to recharge and connect with others has been just as crucial 
  to my success as the work itself.
</p>
<p>
  One of my favorite memories is celebrating a tough assignment with my colleagues. After a long night in the lab, 
  we grabbed pizza, swapped stories, and laughed about our shared struggles. It wasn&apos;t just a break—it was a reminder 
  that none of us are in this alone.
</p>
<p>
  Activities outside of academia, like playing soccer, rock climbing, running, or even just grabbing coffee with friends, 
  have become my reset button. These moments of connection aren&apos;t distractions—they&apos;re fuel. They remind me of why I&apos;m on 
  this journey and give me the energy to face the next big challenge.
</p>
<p>
  If you&apos;re navigating this path too, here&apos;s my advice: <strong>take a break</strong>. Celebrate small wins, vent about 
  setbacks, or share a laugh with friends. These moments aren&apos;t just nice to have—they&apos;re what will sustain you through 
  the ebb and flow of the journey.
</p>
<p>
  In case it wasn&apos;t obvious, I&apos;m not a blogger or a journalist—just someone who&apos;s come to appreciate the importance of stepping back now and then. 
  I hope sharing this resonates with others on similar journeys. Take care of yourself, and don&apos;t forget to enjoy the ride!
</p>


      {/* Image Section with Captions */}
   
      <div className="text-center mb-4">
        <figure>
          <img
            src={soccer.src}
            alt="Soccer with Colleagues"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            Post-research soccer sessions.
          </figcaption>
        </figure>
      </div>
      <div className="text-center mb-4">
        <figure>
          <img
            src={friends.src}
            alt="Community of Friends"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            Just hangin out.
          </figcaption>
        </figure>
      </div>

         <div className="text-center mb-4">
        <figure>
          <img
            src={bridgeCrew.src}
            alt="Bridge Program Colleagues"
            className="img-fluid rounded"
            style={{
              maxWidth: '80%',
              height: 'auto',
              border: '2px solid #ddd',
              borderRadius: '10px',
            }}
          />
          <figcaption className="mt-2 text-muted">
            My Fisk-Vanderbilt Bridge Program colleagues—they&apos;ve been my sounding board, support system, and cheering squad.
          </figcaption>
        </figure>
      </div>


	<p>
	  A PhD isn&apos;t a sprint—it&apos;s a marathon. (Wise advice from my advisor!) 
    And while it may sound cliché, it&apos;s crucial to enjoy the journey, find your support system, and 
    prioritize moments to recharge. These small but meaningful breaks won&apos;t just help you endure the challenges. 
    They&apos;ll turn the hard work into a rewarding and memorable experience.
	</p>

    </div>

    <Footer />
  </div>
);

export default TakeABreak;
