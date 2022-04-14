/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import { auth, logOut } from '../firebase';

export default function Navigation({ position = 'fixed' }) {
  const [navigationShadow, setNavigationShadow] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  const scrollBackground = () => (
    window.scrollY >= 200 ? setNavigationShadow(true) : setNavigationShadow(false));

  window.addEventListener('scroll', scrollBackground);

  return (
    <nav
      style={{ position }}
      className={`navigation ${navigationShadow ? 'shadow-in' : 'shadow-out'}`}
    >
      <ul className="navigation__menu">
        <li>
          {loggedIn ? (
            <RouterLink to="/" className="btn--login">
              {auth.currentUser?.email}
            </RouterLink>
          ) : (
            <RouterLink to="/logowanie" className="btn--login">
              Zaloguj
            </RouterLink>
          )}
        </li>
        <li>
          {loggedIn ? (
            <RouterLink to="/wylogowano" onClick={() => logOut()} className="btn--register">
              Wyloguj
            </RouterLink>
          ) : (
            <RouterLink to="/rejestracja" className="btn--register">
              Załóż konto
            </RouterLink>
          )}
        </li>
      </ul>
      <ul className="navigation__menu">
        <li>
          <HashLink to="/#home" smooth duration={500} tabIndex={0} className="btn">
            Start
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#simple-steps"
            scroll={(el) => scrollWithOffset(el, -200)}
            smooth
            duration={500}
            tabIndex={0}
            className="btn"
          >
            O co chodzi?
          </HashLink>
        </li>
        <li>
          <HashLink to="/#about-us" smooth duration={500} tabIndex={0} className="btn">
            O nas
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#who-we-help"
            scroll={(el) => scrollWithOffset(el, -150)}
            smooth
            duration={500}
            tabIndex={0}
            className="btn"
          >
            Fundacja i organizacje
          </HashLink>
        </li>
        <li>
          <HashLink
            to="/#contact"
            scroll={(el) => scrollWithOffset(el, -200)}
            smooth
            duration={500}
            tabIndex={0}
            className="btn"
          >
            Kontakt
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  position: PropTypes.string,
};

Navigation.defaultProps = {
  position: 'fixed',
};
