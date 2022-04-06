import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLarge from '../ButtonLarge';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">
          Zacznij pomagać!
          <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
        </h1>
        <div className="buttons">
          <ButtonLarge />
          <Link className="btn--large" to="rejestracja">
            ZORGANIZUJ ZBIÓRKĘ
          </Link>
        </div>
      </div>
    </header>
  );
}
