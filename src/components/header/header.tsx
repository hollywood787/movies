import "./header.css";
import { Link } from "react-router-dom";
import { store } from "../../main";
import { useSelector } from "react-redux";

export default function Header() {

  const isLogged = useSelector((state: any) => state.reducerLogin);
  
  function logOut() {
    localStorage.removeItem('user');
    store.dispatch({type: 'Login'})
  }

  return (
    <header>
      <div className="container-fluid">
        <div className="header__block">
          <Link to={"/"} className="header__block-home">
            Home
          </Link>
          {isLogged ? (
            <button className="header__block-login" onClick={() => logOut()}
            >
              Выйти
            </button>
          ) : (
            <button
              className="header__block-login" onClick={() => store.dispatch({type: "on"})}>
              Войти
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
