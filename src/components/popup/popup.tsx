import { useSelector } from "react-redux";
import { SetStateAction, useState } from "react";
import { loginConst, passwordConst } from "../../consts";
import { logOutAction } from "../../actions";
import { offActionsPopup } from "../../actions";
import { ReducerPopup } from "../../reducers";
import { Button, Input, Typography, Box } from "@mui/material";

function Popup() {
  const isAuthorized = useSelector((state: ReducerPopup) => state.reducerPopup);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function changeLogin(event: { target: { value: SetStateAction<string> } }) {
    setLogin(event.target.value);
  }

  function changePassword(event: {
    target: { value: SetStateAction<string> };
  }) {
    setPassword(event.target.value);
  }

  function autorization(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (login === loginConst && password === passwordConst) {
      localStorage.setItem("user", "true");
      offActionsPopup();
      logOutAction();
    }
  }
  return (
    <Box>
      {isAuthorized && (
        <>
          <Box
            sx={{
              position: "fixed",
              backgroundColor: "#fff",
              top: "50%",
              left: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              border: "1px solid black",
              padding: 1,
              textAlign: "center",
              width: "30%",
            }}
          >
            <Button
              sx={{ display: "flex", marginLeft: "auto" }}
              onClick={() => offActionsPopup()}
            >
              X
            </Button>
            <Typography component={"h1"} variant={"h5"}>
              Авторизация
            </Typography>
            <Box component="form" onSubmit={autorization} action="">
              <Input onChange={changeLogin} type="text" placeholder="логин" />
              <Input
                onChange={changePassword}
                type="text"
                placeholder="пароль"
              />
              <Input type="submit" value={"Отправить"} />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export { Popup };
