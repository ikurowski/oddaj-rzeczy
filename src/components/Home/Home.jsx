import React from 'react';
import Header from './HomeHeader';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';

export default function Home() {
  return (
    <>
      <Header />
      <HomeThreeColumns />
      <HomeSimpleSteps />
    </>

  );
}
