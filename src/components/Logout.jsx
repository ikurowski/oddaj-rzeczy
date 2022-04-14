import React from 'react';
import DecorationTitle from './DecorationTitle';
import ButtonLarge from './ButtonLarge';
import Navigation from './Navigation';

export default function Logout() {
  return (
    <>
      <Navigation position="static" />
      <DecorationTitle firstText="Wylogowanie nastąpiło pomyślnie!" />
      <div className="buttons">
        <ButtonLarge text="Strona główna" link="/" />
      </div>
    </>
  );
}
