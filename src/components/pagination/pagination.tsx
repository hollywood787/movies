import { countPageSwitch } from "../../consts";
import { useSelector } from "react-redux";
import { CurrentPage } from "../../reducers";
import { ReducerMovies } from "../../reducers";
import { nextPageAction, prevPageAction } from "../../actions";
import { Button, Stack, Typography, Box } from "@mui/material";

export default function Pagination() {
  const movies = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );
  const currentPage = useSelector(
    (state: CurrentPage) => state.reducerCurrentPage
  );
  const numberOfPages = movies.length / countPageSwitch;

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button
          disabled={!currentPage}
          onClick={() => nextPageAction(countPageSwitch)}
        >
          Назад
        </Button>
        <Button
          disabled={currentPage === movies.length - countPageSwitch}
          onClick={() => prevPageAction(countPageSwitch)}
        >
          Вперед
        </Button>
      </Stack>
      <Typography align="center">
        {currentPage ? currentPage / countPageSwitch + 1 : 1} of{" "}
        {Math.ceil(numberOfPages)}
      </Typography>
    </Box>
  );
}
