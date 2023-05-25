import React from 'react';
import { techIcons, toolIcons} from '../../public/assets/icons';
import './styles.scss';
import wordings from '@/wordings';



const Skill = () => {
  const { skill: { title, tech, tools } } = wordings;

  return (
    <section className='skill section-container'>
      <h2 className='section-title'>{title}</h2>
      <span className='section-line-title'></span>
      <div className='skill__content'>
        <div className='skill__content-info'>
          <h3 className='skill__content-info-title'>{tech.title}</h3>
          <div className='skill__content-info-item'>
            {tech.content.map((text, index) => (
              <div key={text}>
                <span className='icon'>{techIcons[index]}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='skill__content-info'>
          <h3 className='skill__content-info-title'>{tools.title}</h3>
          <div className='skill__content-info-item'>
            {tools.content.map((text, index) => (
              <div key={text}>
                <span className='icon'>{toolIcons[index]}</span>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>   
    </section>
  )
}

export default Skill;