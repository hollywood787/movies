import Pagination from "../pagination/pagination";
import { listGenres } from "../mocks/genres";
import {
  popularBescending,
  popularAscending,
  descendingRanking,
  ascendingRating,
  filterYear,
  filterGenres,
  sortByFavotire,
  bookmarkMovie,
  reset,
  years,
  defaultSort,
  sortForUser,
} from "../../consts";
import { useSelector } from "react-redux";
import { store } from "../../main";
import { filterSorting } from "../../actions";
import { data, Login, ReducerMovies } from "../../reducers";
import {
  Button,
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState } from "react";

export default function Filters() {
  const [sort, setSort] = useState("");

  function filterByYear(e: { target: { value: string } }) {
    let result = data.initList.filter(function (item) {
      if (!item.release_date.indexOf(e.target.value)) {
        return item;
      }
    });
    store.dispatch({ type: filterYear, payload: result });
  }

  const currentList = useSelector(
    (state: ReducerMovies) => state.reducerMovies.curentList
  );

  function filterBySort(e: { target: { value: string } }) {
    setSort(e.target.value);
    let arrayYearSort: any = "12";
    switch (e.target.value) {
      case popularBescending:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case popularAscending:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.popularity > b.popularity ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case descendingRanking:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.vote_average < b.vote_average ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case ascendingRating:
        arrayYearSort = [...currentList].sort((a, b) =>
          a.vote_average > b.vote_average ? 1 : -1
        );
        filterSorting(arrayYearSort);
        break;

      case sortByFavotire:
        const resultFavorite = JSON.parse(
          localStorage.getItem(sortByFavotire) || ""
        );
        filterSorting(resultFavorite);
        break;

      case bookmarkMovie:
        const resultBookmark = JSON.parse(
          localStorage.getItem(bookmarkMovie) || ""
        );
        filterSorting(resultBookmark);
        break;
    }
  }

  function sortByGenres(e: { target: { value: string } }) {
    const result = currentList.filter(function (item) {
      if (item.genre_ids.includes(Number(e.target.value))) {
        return item;
      }
    });
    store.dispatch({ type: filterGenres, payload: result });
  }

  const isAuthorized = useSelector((state: Login) => state.reducerLogin);

  return (
    <Box sx={{ border: "1px solid grey", p: 1 }}>
      <Stack direction="column" justifyContent="space-between" gap={"1rem"}>
        <Typography variant="h5" component={"h2"} align="center">
          Фильтры
        </Typography>
        <Button
          variant="contained"
          onClick={() => store.dispatch({ type: reset })}
        >
          Сбросить все фильтры
        </Button>
        <Box>
          <Typography sx={{ paddingBottom: 2 }}> Сортировать по:</Typography>

          {isAuthorized ? (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
              <Select
                value={sort}
                label="Age"
                onChange={filterBySort}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                {sortForUser.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
              <Select
                value={sort}
                label="Age"
                onChange={filterBySort}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                {defaultSort.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label"> Год релиза:</InputLabel>
            <Select
              value={sort}
              label="Age"
              onChange={filterByYear}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              {years.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Stack direction="column" justifyContent="space-between" gap={"1rem"}>
          {listGenres.map((item) => (
            <label key={item.id}>
              <input type="checkbox" value={item.id} onChange={sortByGenres} />
              {item.name}
            </label>
          ))}
        </Stack>
        <Pagination />
      </Stack>
    </Box>
  );
}
