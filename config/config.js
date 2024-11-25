import profile from './profile.png';

import redwoodImage from '/public/redwood.png';
import italyImage from '/public/italy.png';
import utahImage from '/public/utah.png';
import fissuresImage from '/public/fissures.png';
import plumesImage from '/public/plumes.png';
import pccProjectImage from '/public/pcc_project.png';
import volcanoImage from '/public/crater_lake.JPG';

import uoLogoImage from '/public/images/uo_logo.png';
import radnorImage from '/public/images/radnor_lake.png';
import ashvilleImage from '/public/images/teaching_con.png';
import FauriaLabImage from '/public/images/fauria_lab_cascades.png';
import creekImage from '/public/images/creek.png';
import sketchImage from '/public/images/sketch.JPG';
import snowyNashImage from '/public/images/snowy_nash.png';
import obsidianImage from '/public/images/obsidian.png';
import vesuviusImage from '/public/images/vesuvius.png';
import NashvilleImage from '/public/images/Nashville.png';



import { faAppStore, faGithub, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Edgar",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Software Projects",
			link: "#projects",
		},
		{
			title: "Pictures",  // new subitem
			link: "#pictures",  // link to the pictures section
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Research",
			link: "/research",
		},
		{
			title: "Links",
			link: "/links",
		},

	],
}

export const intro = {
	title: "Hi, I'm Edgar",
	description: "A PhD student researching the dynamics of volcanic flow.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "CV",
			link: "https://drive.google.com/file/d/15yFmKsu-16hAOZqNSUyLP2Cfe11UjG1o/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [


			"Using my background in Physics (B.S. and M.S.), I apply principles of fluid mechanics and thermodynamics to study volcanic eruption processes.",

			"My research focuses on developing mathematical models, running simulations, and conducting numerical experiments to explore and predict the behavior of dynamic natural systems—particularly explosive volcanic eruptions. By leveraging computational science, I aim to gain insights into complex processes that are challenging to observe directly.",

			"I'm passionate about advancing our understanding of volcanic systems and their interactions with the environment. I highly value collaboration within the Earth Science community and am dedicated to mentoring and inspiring the next generation of scientists.",

	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Research Assistant",
			description:
			    "As a research assistant at the University of Oregon, I study the physics of volcanic eruption processes.",
			link: "https://pages.uoregon.edu/volcanologycenter/",
			icons: null,
		},

		{
			title: "Computational Science",
			description: "I build and use computational tools, spanning from automating routine tasks to developing numerical models that capture complex physical phenomena",
			link: "https://github.com/elcarrillo",
			icons: null,
		},
        {
            title: "Student Advocate",
            description: "In part because of experiencing the difficulties associated with being a first-generation Underrepresented Minority (URM) student firsthand, I dedicate time for outreach and mentorship of prospective/current students in physical science.",
            link: "https://gems-program.org/",
            icons: null,
        }
	],
}

export const projects = {
	title: "Software Projects",
	cards: [
		{
			title: "TBD",
			description: "will be added soon.",
			icons: [
				{
					icon: faAppStore,
					link: "#url",
				},
				{
					icon: faGithub,
					link: "#url",
				},
			]
		},
//		{
//			title: "QuranTalk",
//			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
//			icons: [
//				{
//					icon: faAppStore,
//					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
//				},
//				{
//					icon: faGooglePlay,
//					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
//				},
//			]
//		},
//		{
//			title: "Portfolio",
//			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
//			icons: [
//				{
//					icon: faGithub,
//					link: "https://github.com/hashirshoaeb/portfolio",
//				},
		// 	]
		// },
	],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to reach out. My email is elcar@uoregon.edu.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:elcar@uoregon.edu",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "https://calendar.google.com/calendar/appointments/AcZssZ0W4lQXM_I6ySNf--chhc8bl6TvBiF0ba1B_Eo=?gv=true",
      type: "google-calendar",
      isPrimary: false,
    },
  ],
};


// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Edgar Carrillo | PhD Student | Volcano Physics | Computational Physics",
	description: "I am a PhD student at the University of Oregon's Dept. of Earth  Science. I research the dynamics of volcanic flows.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@EdgarLCarrillo",
	description: "PhD Student | University of Oregon",
	cards: [
		{
			title: "My website",
			link: "https://elcarrillo.github.io/portfolio/",
		},
//		{
//			title: "QuranTalk App",
//			link: "https://www.qurantalk.app/",
//		},
		{
			title: "My GitHub",
			link: "https://github.com/elcarrillo",
		},
		// {
		// 	title: "My LinkedIn",
		// 	link: "https://www.linkedin.com/in/elcarrillo/",
		// },
		{
			title: "My ORCID",
			link: "https://orcid.org/0009-0006-4140-8637",
		},
		{
			title: "Fisk-Vanderbilt Bridge Program",
			link: "https://www.fisk-vanderbilt-bridge.org/",
		},
		{
			title: "University of Oregon ERTH",
			link: "https://naturalsciences.uoregon.edu/earth-sciences",
		},
		{
		  title: "Support my opensource work!",
		  link: "https://buymeacoffee.com/elcarrillo",
		}

	]
}

// added section for pictures
export const pictures = {
  title: "Memorable Moments",
  description: "A collection of photos",
  images: [
    { src: redwoodImage.src, alt: 'Hiking in the California bay area', caption: 'Hiking in the California bay area' },
    { src: italyImage.src, alt: 'Field work in northern Italy', caption: 'Field work in northern Italy' },
    { src: utahImage.src, alt: 'Exploring Utah', caption: 'Exploring Utah' },
  ],
}


// added research page
export const research = {
  title: "Research",
  description: "Highlighting my current and past research projects.",
  headerImage: volcanoImage.src, // Add your header image path here
  projects: [
    {
      title: "Dynamics of Shallow Conduit Flow",
      description: `As a member of the Karlstrom lab, my research focuses on understanding the magma flow beneath the Earth's surface and during volcanic eruptions. Specifically, I examine how magma transitions from dike intrusions to conduit flow, which can lead to fissure eruptions that eventually consolidate into a single vent. Using computational fluid dynamics (CFD) simulations, 
	       
	       I analyze magma flow and conduit morphology changes over time. This is particularly challenging for thermo-viscous flows, as heat flux within the conduit alters its geometry.
	       
	       To address these challenges, I utilize numerical modeling to investigate the evolution of flow dynamics. By calibrating these models with observational data from real-world volcanic systems, I aim to enhance their accuracy and predictive capabilities. Understanding the mechanics of magma movement is essential because it influences how far lava flows can travel and where magma will solidify upon cooling.`,
      image: fissuresImage.src,
    },
    {
      title: "Dynamics of Water-Rich Columns",
      description: `Volcanic plumes, columns of ash, and gas released during eruptions can affect the climate, spread volcanic material, and pose risks to aviation. Sometimes, these plumes collapse, leading to dangerous pyroclastic flows. Understanding when and why plume collapse occurs is crucial for safety.

			I explored how external water, such as seawater during underwater eruptions, influences plume collapse. We focused on the "column collapse condition," which is when a rising plume becomes unstable and falls back down.

			Using the 1D steady state model, Plumeria, we simulated various scenarios with different amounts of external water, vent exit speeds, and initial magma temperatures.

			We discovered that small amounts of external water help prevent plume collapse, allowing plumes to rise higher. In contrast, larger amounts of water make collapse more likely. A measurement known as the Richardson number, comparing buoyancy to flow speed, is useful for predicting plume collapse even when external water is present. 

			This research enhances our understanding of how external water affects volcanic plume behavior, including height and stability. Events like the recent (2022) Hunga eruption highlight the importance of understanding water's role in volcanic eruptions. 

			Full results will be available soon (manuscript in revision)! (Corresponding author: Edgar Carrillo-University of Oregon; Principal Investigator: Kristen Fauria-Vanderbilt)`,
      image: plumesImage.src,
    },
    {
      title: "Thermodynamics of Magma Evolution",
      description:`The 2011-2012 eruption of Chile's Cordón Caulle volcano provides valuable insight into how high-silica rhyolite can form directly from basaltic magma. Observations of mafic (basaltic) enclaves surrounded by rhyolitic glass suggest this transformation process.

			Using the rhyolite-MELTS program, we simulated magma evolution under varying pressures and water contents. Understanding this mechanism enhances our knowledge of magma evolution and volcanic behavior, with applications to other volcanic systems to improve predictions of volcanic activity.

			Our full results will be available soon! (Corresponding Author: Anna Ruefer-Stanford University; Principal Investigator: Guil Gualda-Vanderbilt University)

			This research was conducted as part of the MESSY group at Vanderbilt University.`,
      image: pccProjectImage.src,
    },
    // add as needed
  ],
};


// updates page
export const updates = [
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
	image: uoLogoImage.src,
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
	image: radnorImage.src,
	type: "internal",
	link: "/updates/take-a-break"
	},

	{
	title: "Teaching Workshop at GSA Southeastern Section!",
	date: "April 29, 2024", 
	snippet: "I recently attended a teaching workshop at the GSA Southeastern Section meeting in Asheville, NC. The event focused on accessible and hands-on learning techniques for undergraduate students, providing valuable insights to enhance geoscience education.",
	type: "none",
	image: ashvilleImage.src, 
	},

	{
	title: "Writing Retreat at UO!",
	date: "June 07, 2023", 
	snippet: "Our advisor, Dr. Kristen Fauria, invited us to the University of Oregon during her time as a Meierjurgen Visiting Fellow. Joined by my lab mate, Sarah Ward,  we spent a productive couple of weeks at a writing retreat, making significant progress on our theses. We also had the incredible opportunity to explore the Cascades and examine lava flows!",
	type: "internal",
	image: FauriaLabImage.src,
	link: "/updates/writing-retreat", 
	},

	{
	title: "Field Instructor Experience!",
	date: "April 10, 2024",
	snippet: "Led my first geology field trip as part of the Intro to Physical Geology Lab at Vanderbilt University, guiding students through hands-on learning at Richland Creek and Fort Negley.",
	type: "internal",
	image: creekImage.src,
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
	image: sketchImage.src
	},
	{
	title: "Cold weather:  Lessons in Adaptability",
	date: "January 16, 2022",
	snippet: "From the desert to the Bay Area, now an snow storm in Nash. Academia has taught me the value of resilience and community. Moving for opportunities is a challenge, but it’s also a chance for growth and discovery.",
	image: snowyNashImage.src,
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
	title: "Short Course in the Eastern Sierras!",
	date: "May 15, 2022", 
	snippet: "I participated in a one-week short course in Bishop, CA, where we explored the Bishop Tuff and learned to examine outcrops and igneous rocks in the field. Am I a gelogist now?",
	type: "none",
	image: obsidianImage.src
	},

	{
	title: "Field Experience in Volcanology!",
	date: "June 03, 2022",
	snippet: "I embarked on my first fieldwork experience as a volcanology student in Italy, led by Dr. Guil Gualda and joined by the volcanology group from Vanderbilt University! Exploring the volcanic zones of Mount Stromboli and the Ora Caldera, I gained hands-on experience collecting samples and analyzing geological features. This unforgettable trip has deepened my passion for volcanic research.",
	image: vesuviusImage.src,
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
	title: "Machine Learning in Material Science!",
	date: "September 10, 2021",
	snippet: "Just joined the Burger Lab! I will use machine learning techniques to solve challenges in material science, particularly in advancing scintillator development. This opportunity bridges computational methods and experimental materials research, paving the way for innovative solutions.",
	type: "none"
	},
	{
	title: "Going to Music City! 🎸",
	date: "August 1, 2021",
	snippet: "Excited to embark on my graduate journey as a Fisk-Vanderbilt Bridge Fellow in Nashville, TN! Through the prestigious Masters-to-PhD Bridge Program, I will pursue an M.S. in Physics while applying my computational science expertise to research and thesis development.",
	type: "external",
	image: NashvilleImage.src,
	link: "https://www.fisk-vanderbilt-bridge.org/"
	},


];

