import React from 'react';
import DecorationTitle from '../DecorationTitle';
import ButtonLarge from '../ButtonLarge';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <DecorationTitle firstText="Zacznij pomagać!" secondText="Oddaj niechciane rzeczy w zaufane ręce" />
        <div className="buttons">
          <ButtonLarge text="ODDAJ RZECZY" />
          <ButtonLarge text="ZORGANIZUJ ZBIÓRKĘ" />
        </div>
      </div>
    </header>
  );
}
