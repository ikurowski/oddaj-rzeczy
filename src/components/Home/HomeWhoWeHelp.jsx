import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import DecorationTitle from '../DecorationTitle';
import foundationsData from '../../collections/foundationData.json';
import NGOData from '../../collections/NGOData.json';
import localsData from '../../collections/localsData.json';

const whoWeHelp = {
  foundations: {
    heading: 'Fundacjom',
    text: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
  },
  NGO: {
    heading: 'Organizacjom Pozarządowym',
    text: 'Organizacje pozarządowe to wszystkie podmioty, które nie są organami lub jednostkami podległymi administracji publicznej (rządowej i samorządowej) oraz których działalność nie jest nastawiona na osiąganie zysku.',
  },
  locals: {
    heading: 'Lokalnym zbiórkom',
    text: 'Świąteczna Zbiórka Żywności trwa trzy dni i odbywa się na terenie sklepów, galerii i centrów handlowych oraz super- i hipermarketów. W tym czasie do koszy ustawionych w pobliżu kas lub wyjść ze sklepu zbierana jest żywność',
  },
};

export default function HomeWhoWeHelp() {
  const [toggle, setToggle] = useState(whoWeHelp.foundations);
  const [whoWeHelpData, setWhoWeHelpData] = useState(foundationsData);
  const [pageNumber, setPageNumber] = useState(0);

  const groupsPerPage = 3;
  const pagesVisited = pageNumber * groupsPerPage;
  const pageCount = Math.ceil(whoWeHelpData.length / groupsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (toggle === whoWeHelp.foundations) {
      setWhoWeHelpData(foundationsData);
    } else if (toggle === whoWeHelp.NGO) {
      setWhoWeHelpData(NGOData);
    } else if (toggle === whoWeHelp.locals) {
      setWhoWeHelpData(localsData);
    }
  }, [toggle, whoWeHelpData]);

  const handleClick = (event, buttonToggle) => {
    setToggle(buttonToggle);
    setPageNumber(0);
  };

  let whoWeHelpText;
  switch (toggle) {
    case whoWeHelp.foundations:
      whoWeHelpText = whoWeHelp.foundations.text;
      break;
    case whoWeHelp.NGO:
      whoWeHelpText = whoWeHelp.NGO.text;
      break;
    case whoWeHelp.locals:
      whoWeHelpText = whoWeHelp.locals.text;
      break;

    default:
      whoWeHelpText = whoWeHelp.foundations.text;
      break;
  }

  return (
    <section className="who-we-help">
      <DecorationTitle firstText="Komu pomagamy?" />
      <div className="who-we-help__container">
        <div className="buttons">
          <button
            onClick={(event) => handleClick(event, whoWeHelp.foundations)}
            className={
              toggle === whoWeHelp.foundations ? 'btn__who-We-Help--toggle' : 'btn__who-We-Help'
            }
            type="button"
          >
            {whoWeHelp.foundations.heading}
          </button>
          <button
            onClick={(event) => handleClick(event, whoWeHelp.NGO)}
            className={toggle === whoWeHelp.NGO ? 'btn__who-We-Help--toggle' : 'btn__who-We-Help'}
            type="button"
          >
            {whoWeHelp.NGO.heading}
          </button>
          <button
            onClick={(event) => handleClick(event, whoWeHelp.locals)}
            className={
              toggle === whoWeHelp.locals ? 'btn__who-We-Help--toggle' : 'btn__who-We-Help'
            }
            type="button"
          >
            {whoWeHelp.locals.heading}
          </button>
        </div>
        <p className="who-we-help__description">{whoWeHelpText}</p>

        {whoWeHelpData.slice(pagesVisited, pagesVisited + groupsPerPage).map((collection) => (
          <div className="who-we-help__pagination-row" key={collection.id}>
            <div className="who-we-help__pagination-row-left">
              <p className="who-we-help__pagination-row-title">
                {collection.typeOfOrganization}
                {' '}
                &#34;
                {collection.name}
                &#34;
              </p>
              <p className="who-we-help__pagination-row-details">
                Cel i misja:
                {' '}
                {collection.goals}
                .
              </p>
            </div>
            <p className="who-we-help__pagination-row-right">{collection.items}</p>
          </div>
        ))}

        <ReactPaginate
          pageCount={pageCount}
          containerClassName="who-we-help__page-numbers"
          previousClassName="hide"
          nextClassName="hide"
          onPageChange={changePage}
          pageLinkClassName="btn__pagination"
          activeClassName="btn__pagination--active"
          forcePage={pageNumber}
        />
      </div>
    </section>
  );
}
