import React from 'react';
import DecorationTitle from '../DecorationTitle';
import AboutUsPhoto from '../../assets/People.jpg';

export default function HomeAboutUs() {
  return (
    <section className="about-us">
      <div className="about-us__info">
        <DecorationTitle firstText="O nas" />
        <p className="about-us__description">
          Nori grape silver beet broccoli kombu beet greens bean bean potato bean celery. bean
          nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
        </p>
      </div>

      <img className="about-us__photo" src={AboutUsPhoto} alt="people standing in a circle" />
    </section>
  );
}
