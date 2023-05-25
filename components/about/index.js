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
          <button className='about__content-option-item about__content-option-item--contact'>{option.contact}</button>
          <button className='about__content-option-item about__content-option-item--projects'>{option.projects}</button>
        </div>
      </div>
    </section>
  )
}

export default About;