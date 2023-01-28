import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogin, onActionsPopup } from "../../actions";

export default function Header() {
  const isLogged = useSelector((state: any) => state.reducerLogin);

  function logOut() {
    localStorage.removeItem("user");
    isLogin();
  }

  return (
    <header>
      <div className="container-fluid">
        <div className="header__block">
          <Link to={"/"} className="header__block-home">
            Home
          </Link>
          <Link to={"/search"} className="header__block-home">
            Поиск
          </Link>
          {isLogged ? (
            <button className="header__block-login" onClick={() => logOut()}>
              Выйти
            </button>
          ) : (
            <button
              className="header__block-login"
              onClick={() => onActionsPopup()}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
