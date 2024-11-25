import React, { useState } from 'react';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { Nav } from '../components/Navbar';
import updatesHeaderImage from '../public/pescadero.jpg'; // Import the header image


const updates = [
	{
	title: "Thrilled to Participate in the 3MT Competition",
	date: "November 22, 2024",
	snippet: "I had an amazing experience presenting my research at the University of Oregon's Three Minute Thesis (3MT) competition. It was inspiring to hear about the groundbreaking work of fellow researchers and share my own story in just three minutes!",
	type: "internal",
	link: "/updates/3mt",
	},
	{
	title: "Departmental Seminar Speaker at Vanderbilt EES! 🌋",
	date: "November 18, 2024",
	snippet: "Recently returned from Nashville after presenting at the Vanderbilt Earth and Environmental Sciences Departmental Seminar! I discussed how my physics background shapes my study of explosive volcanic eruptions, including new research on the evolution of volcanic conduits during these dynamic events.",
	type: "none",
	},
	{
	title: "Excited to Present at SACNAS NDiSTEM Conference!",
	date: "October 31, 2024",
	snippet: "Thrilled to present my research on the collapse conditions in wet volcanic columns at the SACNAS NDiSTEM Conference. The event offered an incredible platform to connect with researchers and engage in impactful professional development seminars. I was honored to be one of only three geoscience/geophysics graduate students selected to presenta talk.",
	type: "external",
	link: "https://www.sacnas.org/conference",
	},
	{
	title: "Guest Seminar Speaker at LCC!",
	date: "October 20, 2024",
	snippet: "Honored to share my research and academic journey as a guest seminar speaker at Lane Community College in Eugene, Oregon. Outreach opportunities like this are truly invaluable, offering a chance to discuss science and inspire others to pursue their passions in STEM!",
	type: "none",
	},
	{
	title: "Sco' Ducks!",
	date: "September 16, 2024",
	snippet: "I am excitect to continue my doctoral studies at the University of Oregon under the guidance of Dr. Leif Karlstrom! Click the link below to learn more about the Karlstrom research group. Go Ducks!",
	type: "external",
	image: "/images/uo_logo.png",
	link: "https://pages.uoregon.edu/leif/markdown/",
	},

	{
	title  : "📄 Academic CV Template Released!",
	date   : "November 16, 2024",
	snippet: "Excited to share a lightweight and user-friendly LaTeX template for academic CVs! This template is easily customizable and perfect for those new to LaTeX. It offers a clean design and is an excellent starting point for crafting a professional CV. Click 'Learn More' to access the template on GitHub.",
	type   : "external",
	link  : "https://github.com/elcarrillo/academic_cv_latex"
	},
	
	{
	title   : "🎉 PlumeViz Beta Released!",
	date    : "September 2, 2024",
    snippet : "Thrilled to announce the beta release of PlumeViz 1.1.0! This cross-platform software acts as a user-friendly wrapper, complete with enhanced features, for running the Fortran90 version of Plumeria. A big thank you to Liam Kelly for his help in testing the Windows implementation. Click 'Learn More' to visit the GitHub repository!",
	type    : "external",
	link    : "https://github.com/elcarrillo/PlumeViz",
	},

	{
	title: "PDC Workshop 🌋",
	date: "August 30, 2024",
	snippet: "I had the exciting opportunity to participate in a three-day workshop on pyroclastic density currents at the University of Oregon. Led by Dr. Joe Dufek, the event brought together researchers and experts from around the world to discuss the dynamics of these powerful volcanic phenomena, including progress in modeling and software efforts. The workshop greatly enhanced my understanding and sparked new ideas for my own research.",
	type: "none",
	},
	{
	title: "New Collaboration with USGS",
	date: "May 15, 2024",
	snippet: "Excited to announce our collaboration with Volcanologist Larry Mastin from the USGS on volcanic plume modeling!",
	type: "none",
	},
	{
	title: "Finding Balance in PhD Life",
	date: "January 29, 2024",
	snippet: "PhD life is demanding, but taking time to recharge and connect with others has been essential. From late-night lab sessions to unwinding with soccer or coffee chats, these moments remind me to enjoy the journey.",
	image: "/images/radnor_lake.png",
	type: "internal",
	link: "/updates/take-a-break"
	},

	{
	title: "Writing Retreat at UO!",
	date: "June 07, 2023", 
	snippet: "Our advisor, Dr. Kristen Fauria, invited us to the University of Oregon during her time as a Meierjurgen Visiting Fellow. Joined by my lab mate, Sarah Ward,  we spent a productive couple of weeks at a writing retreat, making significant progress on our theses. We also had the incredible opportunity to explore the Cascades and examine lava flows!",
	type: "internal",
	image: "/images/fauria_lab_cascades.png",
	link: "/updates/writing-retreat", 
	},

	{
	title: "Field Instructor Experience!",
	date: "April 10, 2024",
	snippet: "Led my first geology field trip as part of the Intro to Physical Geology Lab at Vanderbilt University, guiding students through hands-on learning at Richland Creek and Fort Negley.",
	type: "internal",
	image: "/images/creek.png",
	link: "/updates/geo_class",
	},
	{
	title: "🎓 Earned My Master's Degree! 🎉",
	date: "August 15, 2023",
	snippet: "Proud to have completed my Master's degree in Physics through the Fisk-Vanderbilt Masters-to-PhD Bridge Program. Heartfelt thanks to my advisor, Dr. Kristen Fauria, for her invaluable guidance and support throughout this journey!",
	type: "none",
	},

	{
	title: "Attended AGU Fall Meeting 2022!",
	date: "December 15, 2022",
	snippet: "My first AGU Fall Meeting, held in Chicago, was an incredible experience! While I didn’t present, I used this opportunity to network with the volcanology and geophysics communities, explore potential future projects, and connect with potential collaborators and advisors. This was an inspiring introduction to the broader Earth sciences community.",
	type: "none",
	},
	{
	title: "Presented at Bridge Research Celebration Day!",
	date: "August 10, 2022",
	snippet: "Honored to present my research poster at Fisk University's Bridge Research Celebration Day! It was an exciting opportunity to showcase my work, connect with peers, and celebrate the incredible research happening within the Bridge Program.",
	type: "none",
	},


	{
	title: "Excited to Join Vandy's EES Department!",
	date: "August 1, 2023",
	snippet: "I am thrilled to officially begin my PhD journey in Earth and Environmental Sciences at Vanderbilt University! Building on my Master's degree in Physics, I am eager to bridge the gap between physics and volcanology by leveraging fluid mechanics and thermodynamics to address complex volcanic phenomena. Joining the EES department feels like a natural progression, as I have been a member of the Vandy Volcanology group , which has profoundly shaped my research interests and goals.",
	type: "none",
	},
{
  title: "Earth Fluids Course with Dr. David Furbish",
  date: "May 10, 2023",
  snippet: "In Spring 2023, I had the privilege of taking an Earth Fluids course with Dr. David Furbish, an exceptional teacher whose engaging lectures and insightful discussions profoundly shaped my understanding of fluid dynamics in Earth systems. Through this course, I gained the foundational knowledge needed to build a pyroclastic density current (PDC) model from scratch!",
  type: "internal",
  link: "/updates/fluids",
  image: "/images/sketch.jpg"
},

	{
	title: "Cold weather:  Lessons in Adaptability",
	date: "January 16, 2022",
	snippet: "From the desert to the Bay Area, now an snow storm in Nash. Academia has taught me the value of resilience and community. Moving for opportunities is a challenge, but it’s also a chance for growth and discovery.",
	image: "/images/snowy_nash.png",
	type: "internal",
	link: "/updates/snowy_nash"
	},


	{
	title: "First Experience as a Graduate Instructor!",
	date: "August 10, 2023",
	snippet: "I had the exciting opportunity to lead the Computational Physics Bootcamp! This intensive two-week summer course is designed for incoming master's students in the Fisk-Vanderbilt Bridge Program, helping them build essential computational skills to excel in their studies.",
	type: "internal",
	link: "/updates/bootcamp",
	},
	{
	title: "First Field Experience in Volcanology!",
	date: "June 03, 2022",
	snippet: "I embarked on my first fieldwork experience as a volcanology student in Italy, led by Dr. Guil Gualda and joined by the volcanology group from Vanderbilt University! Exploring the volcanic zones of Mount Stromboli and the Ora Caldera, I gained hands-on experience collecting samples and analyzing geological features. This unforgettable trip has deepened my passion for volcanic research.",
	image: "/images/vesuvius.png",
	type: "none",
	},



	{
	title: "Diving into Volcanophysics!",
	date: "October 15, 2021",
	snippet: "Excited to officially join the Fauria Research Group at Vanderbilt University's Department of Earth and Environmental Sciences! My research will focus on investigating the dynamics of shallow submarine eruptions using numerical modeling, combining physics and computational science to explore these fascinating volcanic phenomena.",
	type: "external",
	link: "https://sites.google.com/site/kristenfauria"
	},

	{
	title: "Going to Music City! 🎸",
	date: "August 1, 2021",
	snippet: "Excited to embark on my graduate journey as a Fisk-Vanderbilt Bridge Fellow in Nashville, TN! Through the prestigious Masters-to-PhD Bridge Program, I will pursue an M.S. in Physics while applying my computational science expertise to research and thesis development.",
	type: "external",
	image: "/images/Nashville.png",
	link: "https://www.fisk-vanderbilt-bridge.org/"
	},


];


const Updates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Sort updates by date (most recent first)
  const sortedUpdates = [...updates].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Pagination calculation
  const totalPages = Math.ceil(sortedUpdates.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUpdates = sortedUpdates.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const featuredUpdates = sortedUpdates.slice(0, 2); // Top 2 updates for the featured section

  return (
    <div>
      <Nav title="Edgar" />

      {/* Header Section */}
  <div
  className="updates-header text-center text-white"
  style={{
    backgroundImage: `url('/pescadero.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    position: "relative", // Allow content to scroll naturally
    zIndex: -1, // Ensure it's below the content
    overflow: "hidden", // Ensure no scroll bleed
  }}
>
  <div
    className="overlay"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  ></div>
  <div
    className="content position-relative"
    style={{
      zIndex: 2,
      paddingTop: "100px",
    }}
  >
    <h1 className="fw-bold display-4">Updates</h1>
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <p className="lead">
        The updates below highlight moments and insights from my journey in science, teaching, and outreach.
      </p>
    </div>
  </div>
</div>


      <div className="container py-5">
        {/* Featured Updates Section */}
        <section aria-labelledby="featured-updates">
          <h2 id="featured-updates" className="text-primary fw-bold mb-4">
            Latest Updates
          </h2>
          <div className="row">
            {featuredUpdates.map((update, index) => (
              <article key={index} className="col-md-6 mb-4">
                <div className="card">
                  {update.image && (
                    <img
                      src={update.image}
                      alt={`Image for ${update.title}`}
                      className="card-img-top"
                      style={{
                        maxHeight: "200px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{update.title}</h5>
                    <p className="card-text text-muted">{update.date}</p>
                    <p className="card-text">{update.snippet}</p>
                    {update.type === "internal" && (
                      <Link href={update.link} passHref>
                        <a className="btn btn-primary" aria-label={`Read more about ${update.title}`}>
                          Read More
                        </a>
                      </Link>
                    )}
                    {update.type === "external" && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Learn more about ${update.title}`}
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Updates Section */}
        <section aria-labelledby="updates-section" className="mt-5">
          <h2 id="updates-section" className="text-primary fw-bold mb-4">
            All Updates
          </h2>
          <div className="row">
            {currentUpdates.map((update, index) => (
              <article key={index} className="col-md-4 mb-4">
                <div className="card" style={{ minHeight: "300px" }}>
                  {update.image && (
                    <img
                      src={update.image}
                      alt={`Image for ${update.title}`}
                      className="card-img-top"
                      style={{
                        maxHeight: "200px",
                        width: "100%",
                        objectFit: "contain",
                        padding: "10px",
                      }}
                      loading="lazy"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{update.title}</h5>
                    <p className="card-text text-muted">{update.date}</p>
                    <p className="card-text">{update.snippet}</p>
                    {update.type === "internal" && (
                      <Link href={update.link} passHref>
                        <a className="btn btn-primary" aria-label={`Read more about ${update.title}`}>
                          Read More
                        </a>
                      </Link>
                    )}
                    {update.type === "external" && (
                      <a
                        href={update.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        aria-label={`Learn more about ${update.title}`}
                      >
                        Learn More
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center mt-4">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? 'active' : ''
                  }`}
                  aria-current={currentPage === index + 1 ? 'page' : undefined}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                    aria-label={`Go to page ${index + 1}`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Updates;