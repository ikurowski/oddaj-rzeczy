/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'react-scroll/modules/components/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Navigation() {
  const [navigationShadow, setNavigationShadow] = useState(false);

  const scrollBackground = () => (
    window.scrollY >= 200 ? setNavigationShadow(true) : setNavigationShadow(false));

  window.addEventListener('scroll', scrollBackground);

  return (
    <nav
      className={`navigation ${navigationShadow ? 'shadow-in' : 'shadow-out'}`}
    >
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
          <Link to="home" smooth duration={500} tabIndex={0} className="btn">
            Start
          </Link>
        </li>
        <li>
          <Link to="simple-steps" offset={-200} smooth duration={500} tabIndex={0} className="btn">
            O co chodzi?
          </Link>
        </li>
        <li>
          <Link to="about-us" offset={-130} smooth duration={500} tabIndex={0} className="btn">
            O nas
          </Link>
        </li>
        <li>
          <Link to="who-we-help" offset={-200} smooth duration={500} tabIndex={0} className="btn">
            Fundacja i organizacje
          </Link>
        </li>
        <li>
          <Link to="contact" offset={-200} smooth duration={500} tabIndex={0} className="btn">
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>

  );
}
