/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'react-scroll/modules/components/Link';

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        {/*  FIXME Czy to jest odpowiednie miejsce i nazwa dla klasy w bem */}
        <li><Link href="#" className="btn">Start</Link></li>
        <li><Link href="#" className="btn">O co chodzi?</Link></li>
        <li><Link href="#" className="btn">O nas</Link></li>
        <li><Link href="#" className="btn">Fundacja i organizacje</Link></li>
        <li><Link href="#" className="btn">Kontakt</Link></li>
      </ul>
    </nav>
  );
}
