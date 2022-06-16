import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { LANG } from "../../config/langs";

function Header() {
  const { country, setCountry } = useContext(GlobalContext);
  const lang = LANG[country];

  const handleCountryChange = (ev) => {
    setCountry(ev.target.value);
  }
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">{lang.Home}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/news-list">{lang.NewsList}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/form">{lang.Form}</Link>
          </li>
        </ul>
        <select
          id="country-selector"
          className="form-select w-25"
          value={country}
          onChange={handleCountryChange}>
          <option value="en-US">Iuesei</option>
          <option value="es-ES">Ejpaña</option>
          <option value="fr-FR">Lafrans</option>
          <option value="de-DE">Doichland</option>
        </select>
      </div>
    </nav>
  )
}

export default Header