import React, { Fragment, useEffect, useState } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, work, pictures } from '../config/config';
import { Header } from '../components/Header';
import Pictures from '../components/Pictures';

export default function Home() {
  const [key, setKey] = useState(0); // Add state for key
  const [isDarkMode, setIsDarkMode] = useState(false); // Add state for dark mode

  useEffect(() => {
    setKey((prev) => prev + 1); // Update key on component mount
  }, []);

  useEffect(() => {
    // Add or remove the dark-mode class on the body element
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
        toggleDarkMode={toggleDarkMode} // Pass toggleDarkMode to Navbar
        isDarkMode={isDarkMode} // Pass current dark mode state
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
        key={key} // Force remount on key change
        title={contact.title}
        description={contact.description}
        buttons={contact.buttons}
      />
      <Footer />
    </Fragment>
  );
}
