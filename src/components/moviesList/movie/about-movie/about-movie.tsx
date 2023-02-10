import { Typography, CardMedia, Stack } from "@mui/material";

type MovieInterface = {
  element: any;
};

function AboutMovie({ element }: MovieInterface) {
  return (
    <Stack direction="column" justifyContent="space-between" gap={"1rem"}>
      <CardMedia
        image={"./assets/images/time.jpg"}
        component="img"
        sx={{ height: 500, width: 350 }}
      ></CardMedia>

      <Typography component={"h1"} variant={"h5"}>
        {element.title}
      </Typography>
      <Typography variant={"body2"}>Рейтинг {element.vote_average}</Typography>
      <Typography variant={"body2"}>{element.overview}</Typography>

      <Typography component={"h2"} variant={"h5"}>
        Детали
      </Typography>
      <Typography variant={"body2"}>
        Дата выхода: {element.release_date}
      </Typography>
      <Typography variant={"body2"}>
        Проголосовавших: {element.vote_count}
      </Typography>
      <Typography variant={"body2"}>
        Оригинальный язык: {element.original_language}
      </Typography>
      <Typography variant={"body2"}>
        Популярность: {element.popularity}
      </Typography>
    </Stack>
  );
}

export { AboutMovie };
