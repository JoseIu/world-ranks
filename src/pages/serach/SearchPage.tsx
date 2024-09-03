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

        <aside>
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
            <ul>
              <li>Americas</li>
              <li>Antartic</li>
              <li>Africa</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
          <div>
            <span>Status</span>
            <label htmlFor="member">
              <input type="checkbox" name="member" id="member" />
              Member of the United Nations
            </label>
            <label htmlFor="independent">
              <input type="checkbox" name="independent" id="independent" />
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
