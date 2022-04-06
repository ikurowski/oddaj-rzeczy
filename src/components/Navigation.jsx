/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'react-scroll/modules/components/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li>
          <RouterLink to="logowanie" className="btn--login">
            Zaloguj
          </RouterLink>
        </li>
        <li>
          <RouterLink to="rejestracja" className="btn--register">
            Załóż konto
          </RouterLink>
        </li>
      </ul>
      <ul className="navigation__menu">
        <li>
          <Link to="" smooth duration={500} tabIndex={0} className="btn">
            Start
          </Link>
        </li>
        <li>
          <Link to="" smooth duration={500} tabIndex={0} className="btn">
            O co chodzi?
          </Link>
        </li>
        <li>
          <Link to="" smooth duration={500} tabIndex={0} className="btn">
            O nas
          </Link>
        </li>
        <li>
          <Link to="" smooth duration={500} tabIndex={0} className="btn">
            Fundacja i organizacje
          </Link>
        </li>
        <li>
          <Link to="" smooth duration={500} tabIndex={0} className="btn">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
