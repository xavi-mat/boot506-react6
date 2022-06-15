import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      &nbsp;|&nbsp;
      <Link to="/list">News List</Link>
      &nbsp;|&nbsp;
      <Link to="/form">Form</Link>
    </div>
  )
}

export default Header