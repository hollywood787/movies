import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="header__block">
          <Link to={"/"} className="header__block-home">
            Home
          </Link>
          <button className="header__block-login">Login</button>
        </div>
      </div>
    </header>
  );
}
