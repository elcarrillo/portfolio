
import profile from './profile.png';
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
			title: "Projects",
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
	],
}
export const intro = {
	title: "Hi, I'm Edgar",
	description: "A PhD student researching the physics of explosive volcanic eruptions",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1XEnKkaNySUnfJy4o3xS0y6d9-F4igAk4/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		" I'm a PhD student at Vanderbilt University, and my academic journey started with a BS in Physics from Cal State San Bernardino in 2019.",
		" After that, I dabbled in tech in the California Bay Area before heading to Nashville, TN for grad school. ", 
		"I recently wrapped up my MS in Physics from Fisk University in August 2023. Currently, my interests are in physical volcanology and the dynamics of explosive eruptions. I am interested in how mathematical models, physical models and experiments can be used as a tool to explore natural processes, predict how dynamic systems will behave, and gain insight into processes that are difficult to directly observe. ",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Dynamics of water rich plumes",
			description: "Researching the impact of external water on volcanic plume height using the one-dimensional Plumeria model.",
			icons: null,
		},
		{
			title: "Computational Science",
			description: "I build and use compuational tools, spanning from automating routine tasks to developing numerical models that capture complex physical phenomena",
			icons: null,
		},
        {
            title: "Student Advocate",
            description: "In part because of experiencing the difficulties associated with being a first-generation Underrepresented Minority (URM) student firsthand, I dedicate time for outreach and mentorship of prospective/current students in physical science.",
            icons: null,
        }
	],
}

export const projects = {
	title: "Projects",
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
	description: "Coffee Chat! Please do not hesitate to reach out. My email is edgar.carrillo@vanderbilt.edu.",
	buttons: [
		{
			title: "Email Me",
			link: "edgar.carrillo@vanderbilt.edu",
			isPrimary: true,
		},
//		{
//			title: "Schedule Meeting",
//			link: "",
//			isPrimary: false,
//		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Edgar Carrillo | PhD Student | Volcano Physics | Computational Physics",
	description: "I am a PhD student at Vanderbitl University in Earth and Environmental Science. I reserach the dynamics of explosive volcanic eruptions. I graduated from Fisk University in August 2023 with an MS in Physics.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@EdgarLCarrillo",
	description: "PhD Student | Vanderbilt University",
	cards: [
		// {
		// 	title: "My website",
		// 	link: " ",
		// },
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
