import React, { Fragment, useEffect } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import {
  about,
  contact,
  intro,
  navigation,
  projects,
  SEO,
  work,
  pictures,
} from '../config/config';
import { Header } from '../components/Header';
import Pictures from '../components/Pictures';


export default function Home() {
  // Add schema markup for the home page
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Edgar Carrillo's Portfolio",
      "description": "A portfolio website showcasing research, skills, and projects by Edgar Carrillo.",
      "url": "https://elcarrillo.github.io/portfolio",
      "author": {
        "@type": "Person",
        "name": "Edgar Carrillo",
        "jobTitle": "Researcher",
        "worksFor": {
          "@type": "Organization",
          "name": "University of Oregon"
        },
        "sameAs": [
          "https://www.linkedin.com/in/elcarrillo/",
          "https://x.com/edgarlcarrillo"
        ]
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Fragment>
      <Header seo={SEO} />

      <Nav
        title={navigation.name}
        links={navigation.links}
      />

      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />

      <About
        title={about.title}
        description={about.description}
      />

      <Skills
        title={work.title}
        cards={work.cards}
      />

      <Projects
        title={projects.title}
        cards={projects.cards}
      />

      <Pictures
        title={pictures.title}
        description={pictures.description}
        images={pictures.images}
      />

      <Contact {...contact} />

      <Footer />
    </Fragment>
  );
}