import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLogin, onActionsPopup } from "../../actions";
import { Box, AppBar, Button, Stack, Container } from "@mui/material";

export default function Header() {
  const isLogged = useSelector((state: any) => state.reducerLogin);

  function logOut() {
    localStorage.removeItem("user");
    isLogin();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ p: 1 }} position="static">
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to={"/"}>Home</Link>
            <Link to={"/search"}>Поиск</Link>

            {isLogged ? (
              <Button variant="contained" onClick={() => logOut()}>
                Выйти
              </Button>
            ) : (
              <Button variant="contained" onClick={() => onActionsPopup()}>
                Войти
              </Button>
            )}
          </Stack>
        </Container>
      </AppBar>
    </Box>
  );
}
