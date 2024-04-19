import React from 'react';
import wordings from '../../i18n/translates/globals/es';
import './styles.scss'

const Home = () => (
  <section className='home'>
    <div className="home-container">
      <div className="home-container__wording">
        <h2 className="home-container__wording-name">{wordings.home.title}</h2>
        <h4 className="home-container__wording-position">{wordings.home.subtitle}</h4>
        <button className="home-container__wording-curriculum">
          {wordings.home.button}
        </button>
      </div>
      <div className="home-container__img">
        <img decoding="async" src="https://dlmak.backdt.com/wp-content/uploads/2023/05/hero_img-1.png" alt="Mak" className="personal-img" />
      </div>      
    </div>
  </section>
);

export default Home;
