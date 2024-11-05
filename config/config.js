import profile from './profile.png';

import redwoodImage from '/public/redwood.png';
import italyImage from '/public/italy.png';
import utahImage from '/public/utah.png';



import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
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
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
		{
			title: "Pictures",  // new tab
			link: "#pictures",  // link to the pictures section
		},
		{
			title: "Research",
			link: "/research",
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
      link: "mailto:elcar@uoregon.edu",  // Ensure link starts with "mailto:"
      isPrimary: true,
    },
  ]
}

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
//		{
//			title: "StarBook App",
//			link: "https://starbook.dev/",
//		},
		{
			title: "My GitHub",
			link: "https://github.com/elcarrillo",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/elcarrillo/",
		},
				{
			title: "Fisk-Vanderbilt Bridge Program",
			link: "https://www.fisk-vanderbilt-bridge.org/",
		},
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
  projects: [
    {
      title: "Dynamics of Shallow Conduit Flow",
      description: `As a member of the Karlstrom lab, my research focuses on understanding the magma flow beneath the Earth's surface and during volcanic eruptions. Specifically, I examine how magma transitions from dike intrusions to conduit flow, which can lead to fissure eruptions that eventually consolidate into a single vent. Using computational fluid dynamics (CFD) simulations, 
	       
	       I analyze magma flow and conduit morphology changes over time. This is particularly challenging for thermo-viscous flows, as heat flux within the conduit alters its geometry.
	       
	       To address these challenges, I utilize numerical modeling to investigate the evolution of flow dynamics. By calibrating these models with observational data from real-world volcanic systems, I aim to enhance their accuracy and predictive capabilities. Understanding the mechanics of magma movement is essential because it influences how far lava flows can travel and where magma will solidify upon cooling.`,
      image: "./fissures.png",
    },
    {
      title: "Dynamics of Water-Rich Columns",
      description: `Volcanic plumes, columns of ash, and gas released during eruptions can affect the climate, spread volcanic material, and pose risks to aviation. Sometimes, these plumes collapse, leading to dangerous pyroclastic flows. Understanding when and why plume collapse occurs is crucial for safety.

			I explored how external water, such as seawater during underwater eruptions, influences plume collapse. We focused on the "column collapse condition," which is when a rising plume becomes unstable and falls back down.

			Using the 1D steady state model, Plumeria, we simulated various scenarios with different amounts of external water, vent exit speeds, and initial magma temperatures.

			We discovered that small amounts of external water help prevent plume collapse, allowing plumes to rise higher. In contrast, larger amounts of water make collapse more likely. A measurement known as the Richardson number, comparing buoyancy to flow speed, is useful for predicting plume collapse even when external water is present. 

			This research enhances our understanding of how external water affects volcanic plume behavior, including height and stability. Events like the recent (2022) Hunga eruption highlight the importance of understanding water's role in volcanic eruptions. 

			Full results will be available soon (manuscript in revision)!`,
      image: "./plumes.png",
    },
    {
      title: "Thermodynamics of Magma Evolution",
      description:`The 2011-2012 eruption of Chile's Cordón Caulle volcano provides valuable insight into how high-silica rhyolite can form directly from basaltic magma. Observations of mafic (basaltic) enclaves surrounded by rhyolitic glass suggest this transformation process.

			Using the rhyolite-MELTS program, we simulated magma evolution under varying pressures and water contents. Understanding this mechanism enhances our knowledge of magma evolution and volcanic behavior, with applications to other volcanic systems to improve predictions of volcanic activity.

			Our full results will be available soon! (Corresponding Author: Anna Ruefer, Stanford University; Principal Investigator: Guil Gualda, Vanderbilt University)

			This research was conducted as part of the MESSY group at Vanderbilt University.`,
      image: "./pcc_project.png",
    },
    // add as needed
  ],
};

