import React from 'react';
import HomeAboutUs from './HomeAboutUs';
import HomeContact from './HomeContact';
import Header from './HomeHeader';
import HomeSimpleSteps from './HomeSimpleSteps/HomeSimpleSteps';
import HomeThreeColumns from './HomeThreeColumns/HomeThreeColumns';
import HomeWhoWeHelp from './HomeWhoWeHelp';

export default function Home() {
  return (
    <>
      <Header />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
    </>
  );
}
