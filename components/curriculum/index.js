import React from 'react';
import wordings from '@/wordings';
import './styles.scss';

const Curriculum = () => {
  const {
    title,
    curriculum,
  } = wordings.experiences;

  return (
    <section className='curriculum section-container'>
      <h2 className='section-title'>{title}</h2>
      <span className='section-line-title'></span>
      <div className='curriculum__content'>
        {
          Object.values(curriculum).map(job => (
            <div className='curriculum__content-item' key={job.job}>
              <div className='curriculum__content-item__head'>
                <h3 className='curriculum__content-item__head-date'>{job.date}</h3>
                <h2 className='curriculum__content-item__head-title'>{job.company} <span className='curriculum__content-item__head-title--ligth'>{job.job}</span></h2>                
              </div>
              <p className='curriculum__content-item__description'>{job.content}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Curriculum;
