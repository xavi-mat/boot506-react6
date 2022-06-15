import { Link } from "react-router-dom";

function Header() {
  return (
    <div>Header
    <Link to="/">Home</Link>
    <Link to="/list">News List</Link>
    <Link to="/form">Form</Link>
    </div>
  )
}

export default Header