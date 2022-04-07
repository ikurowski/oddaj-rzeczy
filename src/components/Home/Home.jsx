import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import Header from './HomeHeader';
import HomeSimpleSteps from './HomeSimpleSteps/HomeSimpleSteps';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';

export default function Home() {
  return (
    <>
      <Header />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
    </>
  );
}
