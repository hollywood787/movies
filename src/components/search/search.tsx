import { listGenres } from "../mocks/genres";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  filterByGenres,
  filterByMark,
  filterByPopularity,
} from "../functions-filter/functions-filter";
import { useSelector } from "react-redux";
import { ReducerSearch } from "../../reducers";
import {
  Button,
  Stack,
  CardMedia,
  Typography,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

function Quiz() {
  const [currentMovie, setCurrentMovie] = useState(0);

  const currentList = useSelector(
    (state: ReducerSearch) => state.reducerSearch
  );

  const result = currentList.slice(currentMovie, currentMovie + 1);
  result.push({ title: "Фильмы закончились" });

  return (
    <Stack direction="column" justifyContent="space-between" gap={"1rem"}>
      <Typography variant="h5" component={"h1"}>
        Выберите жанр
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
        <Select
          onChange={filterByGenres}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {listGenres.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h5" component={"h1"}>
        Оценка фильма
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
        <Select
          onChange={filterByMark}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={"high"}>Высокая</MenuItem>
          <MenuItem value={"low"}>Низкая</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5" component={"h1"}>
        Популярность фильма
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Сортировать</InputLabel>
        <Select
          onChange={filterByPopularity}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          <MenuItem value={"high"}>Популярный</MenuItem>
          <MenuItem value={"low"}>Неизвестный</MenuItem>
        </Select>
      </FormControl>

      <Box>
        <CardMedia
          image={"./assets/images/time.jpg"}
          component="img"
          sx={{ height: 500, width: 350 }}
        ></CardMedia>
        {result[0].title}
      </Box>
      <Stack direction="row" gap={"2rem"} alignItems="center">
        <Link to={`/${result[0].id}`}>Подходит</Link>
        <Button onClick={() => setCurrentMovie(currentMovie + 1)}>
          Не подходит
        </Button>
      </Stack>
    </Stack>
  );
}

export { Quiz };
