import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/news-list">News List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header