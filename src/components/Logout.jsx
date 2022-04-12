import React from 'react';
import DecorationTitle from './DecorationTitle';
import ButtonLarge from './ButtonLarge';

export default function Logout() {
  return (
    <>
      <DecorationTitle firstText="Wylogowanie nastąpiło pomyślnie!" />
      <div className="buttons">
        <ButtonLarge text="Strona główna" link="/" />
      </div>
    </>
  );
}
