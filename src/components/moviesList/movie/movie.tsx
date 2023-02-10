import { useSelector } from "react-redux";
import { sortByFavotire, bookmarkMovie } from "../../../consts";
import { Link } from "react-router-dom";
import { onActionsPopup } from "../../../actions";
import { Typography, CardMedia, Stack, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

type MovieInterface = {
  title: string;
  voteAverage: number;
  item: any;
  id: number;
};

export default function Movie({
  title,
  voteAverage,
  item,
  id,
}: MovieInterface) {
  const isLogged = useSelector((state: any) => state.reducerLogin);
  const lcFavotieMovie = localStorage.getItem(sortByFavotire) || "";
  const lcBookmarkMovie = localStorage.getItem(bookmarkMovie) || "";

  if (!lcFavotieMovie) {
    localStorage.setItem(sortByFavotire, JSON.stringify([]));
  }

  if (!lcBookmarkMovie) {
    localStorage.setItem(bookmarkMovie, JSON.stringify([]));
  }

  function eventOnButtonFavorite() {
    if (isLogged) {
      const currentLC = JSON.parse(localStorage.getItem(sortByFavotire) || "");

      const result = [...currentLC, item];
      localStorage.setItem(sortByFavotire, JSON.stringify(result));
    } else {
      onActionsPopup();
    }
  }

  function eventOnButtonBookmark() {
    if (isLogged) {
      const currentLC = JSON.parse(localStorage.getItem(bookmarkMovie) || "");
      const result = [...currentLC, item];
      localStorage.setItem(bookmarkMovie, JSON.stringify(result));
    } else {
      onActionsPopup();
    }
  }

  return (
    <Box sx={{ border: "1px solid grey" }}>
      <Stack direction="row" gap={"1rem"}>
        <CardMedia
          image={"./assets/images/time.jpg"}
          component="img"
          sx={{ height: 300, width: 210 }}
        ></CardMedia>
        <Stack direction="column" gap={"2rem"}>
          <Stack direction="row" justifyContent="space-between" gap={"1rem"}>
            <Typography variant="body1">Рейтинг: {voteAverage}</Typography>
            <FavoriteIcon
              onClick={() => eventOnButtonFavorite()}
            />
            <BookmarkBorderIcon
              onClick={() => eventOnButtonBookmark()}
            />
          </Stack>
          <Typography variant="h5" component={"h2"}>
            {title}
          </Typography>
          <Link to={`/${id}`}>Подробнее</Link>
        </Stack>
      </Stack>
    </Box>
  );
}
