import "./popup.css";
import { useSelector } from "react-redux";
import { store } from "../../main";
import { SetStateAction, useState } from "react";
import { loginConst, passwordConst } from "../../consts";

function Popup() {
  const isAuthorized = useSelector((state: boolean) => state.reducerPopup);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function changeLogin(event: { target: { value: SetStateAction<string> } }) {
    setLogin(event.target.value);
  }

  function changePassword(event: { target: { value: SetStateAction<string> }; }) {
    setPassword(event.target.value);
  }

  function autorization(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (login === loginConst && password === passwordConst) {
      localStorage.setItem("user", "true")
      store.dispatch({ type: "off" })
      store.dispatch({ type: "Exit" })
    }
  }
  return (
    <div>
      {isAuthorized && (
        <>
          <div className="popup">
            <div
              className="button__close"
              onClick={() => store.dispatch({ type: "off" })}
            >
              X
            </div>
            <div className="popup__content">
              <h1>Авторизация</h1>
            </div>
            <form className="autrization" onSubmit={autorization} action="">
              <input onChange={changeLogin} type="text" placeholder="логин" />
              <input
                onChange={changePassword}
                type="text"
                placeholder="пароль"
              />
              <button type="sumbit">Отправить</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export { Popup };
