import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header container">
      <div className="header__container">
        <h3 className="header__title">
          Zacznij pomagać!
          <br />
          Oddaj niechciane rzeczy w zaufane ręce
        </h3>
        <div className="buttons">
          <Link className="btn--large" to="/">
            ODDAJ RZECZY
          </Link>
          <Link className="btn--large" to="/">
            ZORGANIZUJ ZBIÓRKĘ
          </Link>
        </div>
      </div>
    </header>
  );
}
