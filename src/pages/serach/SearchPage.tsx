import './searchPage.scss';
export const SearchPage = () => {
  return (
    <>
      <section className="hero">
        <h1>
          <img className="hero__logo" src="./images/Logo.svg" alt="logo" />
        </h1>
      </section>

      <section className="container wrapper">
        <header className="header">
          <span className="header__count">Found 234 countries</span>
          <div className="header__search">
            <img className="header__icon" src="./images/Search.svg" alt="search icon" />
            <input
              className="header__input"
              type="text"
              name="search"
              id="search"
              placeholder="Search by Name, Region, Subregion"
            />
          </div>
        </header>

        <aside className="filters">
          <div className="sort">
            <label className="sort__label" htmlFor="sort-by">
              Sort by
            </label>
            <select className="sort__select" name="sort-by" id="sort-by">
              <option value="0">Population</option>
            </select>
          </div>
          <div className="sort">
            <span>Region</span>
            <ul className="region">
              <li className="region__list">Americas</li>
              <li className="region__list">Antartic</li>
              <li className="region__list">Africa</li>
              <li className="region__list">Asia</li>
              <li className="region__list">Europe</li>
              <li className="region__list">Oceania</li>
            </ul>
          </div>
          <div className="sort">
            <span>Status</span>
            <label className="status" htmlFor="member">
              <input className="status__input" type="checkbox" name="member" id="member" />
              Member of the United Nations
            </label>
            <label className="status" htmlFor="independent">
              <input className="status__input" type="checkbox" name="independent" id="independent" />
              Independent
            </label>
          </div>
        </aside>

        <div>
          <table>
            <thead>
              <tr>
                <td>Flag</td>
                <td>Name</td>
                <td>Population</td>
                <td>Area (km²)</td>
                <td>Region</td>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </section>
    </>
  );
};
