import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import cascadesImage from '../public/images/cascades.png';

export const Skills = ({ title, cards }) => {
  return (
    <div id="skills" className="skills-section bg-secondary py-5 px-5">
      <div className="container">
        <h1 className="text-primary fw-bold">{title}</h1>

        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link}
            />
          ))}
        </div>

        {/* Research Feature */}
        <Link href="/research" passHref>
          <a
            className="skills-research-feature"
            style={{
              backgroundImage: `url(${cascadesImage.src})`,
            }}
            aria-label="Explore current research"
          >
            <div className="skills-research-overlay"></div>

            <div className="skills-research-content">
              <span className="btn btn-light skills-research-button">
                Explore Current Research
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="projects-section bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">
          Software Projects
        </h1>

        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              icons={value.icons}
              tags={value.tags}
              isSoftware={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  title,
  description,
  icons,
  link,
  tags,
  isSoftware,
}) => {
  const CardContent = (
    <div
      className={`card py-3 px-3 mx-sm-4 my-4 card-work ${
        isSoftware ? 'software-card' : ''
      }`}
      style={{
        width: '20rem',
        cursor: 'pointer',
      }}
    >
      <h4 className="text-primary">
        {title}
      </h4>

      <p className="text-dark">
        {description}
      </p>

      {tags && (
        <div className="software-tags">
          {tags.map((tag, index) => (
            <span key={index} className="software-tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-end">
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="icon-style mx-1"
                  icon={value.icon}
                  size="2x"
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );

  return link ? (
    <Link href={link} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        {CardContent}
      </a>
    </Link>
  ) : (
    CardContent
  );
};