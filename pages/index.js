import React, { Fragment, useEffect, useState } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work, pictures } from '../config/config';
import { Header } from '../components/Header';
import Pictures from '../components/Pictures'; 

export default function Home() {
  const [key, setKey] = useState(0); // add state for key

  useEffect(() => {
    setKey((prev) => prev + 1); // update key on component mount
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
      <Contact
        key={key} // force remount on key change
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
