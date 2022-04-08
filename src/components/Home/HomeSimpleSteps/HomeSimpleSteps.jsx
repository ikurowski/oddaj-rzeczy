import React from 'react';
import DecorationTitle from '../../DecorationTitle';
import HomeSimpleStepsColumn from './HomeSimpleStepsColumn';
import ButtonLarge from '../../ButtonLarge';
import IconShirt from '../../../assets/Icon-1.svg';
import IconPackage from '../../../assets/Icon-2.svg';
import IconGlass from '../../../assets/Icon-3.svg';
import IconCircledArrows from '../../../assets/Icon-4.svg';

export default function HomeSimpleSteps() {
  return (
    <section className="simple-steps">
      <DecorationTitle firstText="Wystarczą 4 proste kroki" />
      <div className="simple-steps__columns">
        <HomeSimpleStepsColumn
          imgSrc={IconShirt}
          imgAlt="T-shirt icon"
          firstText="Wybierz rzeczy"
          secondText="ubrania, zabawki, sprzęt i inne"
        />
        <HomeSimpleStepsColumn
          imgSrc={IconPackage}
          imgAlt="Package icon"
          firstText="Spakuj je"
          secondText="skorzystaj z worków na śmieci"
        />
        <HomeSimpleStepsColumn
          imgSrc={IconGlass}
          imgAlt="Glass icon"
          firstText="Zdecyduj komu chcesz pomóc"
          secondText="wybierz zaufane miejsce"
        />
        <HomeSimpleStepsColumn
          imgSrc={IconCircledArrows}
          imgAlt="Circled arrows icon"
          firstText="Zamów kuriera"
          secondText="kurier przyjedzie w dogodnym terminie"
        />
      </div>
      <div className="buttons">
        <ButtonLarge text="ODDAJ RZECZY" />
      </div>

    </section>
  );
}
