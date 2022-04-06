import React from 'react';
import HomeColumn from './HomeColumn';

export default function HomeThreeColumns() {
  return (
    <section
      style={{ backgroundImage: "url('/background/3-Columns-Background.png')" }}
      className="three-columns"
    >
      <div className="three-columns__columns">
        <HomeColumn
          number="10"
          title="ODDANYCH WORKÓW"
          text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        />
        <HomeColumn
          number="5"
          title="WSPARTYCH ORGANIZACJI"
          text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        />
        <HomeColumn
          number="7"
          title="ZORGANIZOWANYCH ZBIÓREK"
          text="Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
        />
      </div>
    </section>
  );
}
