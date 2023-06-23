import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import wordings from '@/wordings';
import './styles.scss';

const About = () => {
  const { about: { title, content, option } } = wordings;

  return (
    <section className='about section-container'>
      <h2 className='section-title'>{title}</h2>
      <span className='section-line-title'></span>
      <div className='about__content'>
        <p className='about__content-text'>{ReactHtmlParser(content.primary)}</p>
        <p className='about__content-text'>{content.secondary}</p>
        <p className='about__content-text'>{content.tertiary}</p>
        <div className='about__content-option'>
          <a className='about__content-option-item about__content-option-item--contact' href='#contact'>{option.contact}</a>
          <a className='about__content-option-item about__content-option-item--projects' href='#projects'>{option.projects}</a>
        </div>
      </div>
    </section>
  )
}

export default About;