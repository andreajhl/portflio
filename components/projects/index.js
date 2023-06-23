import React from 'react';
import { projectCard, projectsCarousel } from '@/constants/projects';
import wordings from '@/wordings';
import './styles.scss';
import CustomModal from '../custom-modal';

const DescriptionProyect = ({ descriptionData, stackLabel }) => {
  const { title, tech, content } = descriptionData;
  const listItem = tech.replaceAll(' /', ',');

  return (
    <div className="description">
      <div className="description__head">
        <h3 className="description__head-title">{title}</h3>
        <span className="description__head-subtitle">{content.subtitle}</span>
      </div>
      <p className="description__content">{content.description}</p>
      <p className="description__footer">{stackLabel} <span className="description__footer--lighter">{listItem}</span></p>
    </div>
  )
}

const Projects = () => {
  const {
    title,
    learnMore,
    stackLabel,
    projects,
  } = wordings.projects;

  return (
    <section className='project section-container'>
      <h2 className='section-title'>{title}</h2>
      <span className='section-line-title'></span>
        <div className='project__content'>
          {
            Object.keys(projects).map(key => (
              <div
                key={projects[key].title}
                className="project__content-item"
              >
                <div className="project__content-item__img" style={{ background: `url(${projectCard[key]}) top center/cover` }}></div>
                <div className="project__content-item__text">
                  <div className="project__content-item__text-head">
                    <div className="project__content-item__text-head-title--bold">{projects[key].title}</div>
                    <span className="project__content-item__text-head-title">{projects[key].tech}</span>
                  </div>
                  <CustomModal
                    textBtn={learnMore}
                    key={projects[key].title}
                    photosCarousels={projectsCarousel[key]}
                    customClass="project__content-item__text-footer"
                  >
                    <DescriptionProyect descriptionData={projects[key]} stackLabel={stackLabel} />
                  </CustomModal>
                </div>
              </div>
            ))
          }      
      </div>
    </section>
  )
}

export default Projects;