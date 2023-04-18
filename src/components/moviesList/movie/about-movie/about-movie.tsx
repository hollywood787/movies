import "./about-movie.css";

type MovieInterface = {
  element: any;
};

function AboutMovie({ element }: MovieInterface) {
  return (
    <div>
      <div className="block_element">
        <div className="block_element-image">
          <img src="./assets/images/time.jpg" alt="" />
        </div>
        <div className="block_element-description">
          <h1>{element.title}</h1>
          <div>Рейтинг {element.vote_average}</div>
          <div>{element.overview}</div>
        </div>
      </div>
      <div className="block_ellement-details">
        <h2>Детали</h2>
        <div> Дата выхода: {element.release_date}</div>
        <div> Проголосовавших: {element.vote_count}</div>
        <div>Оригинальный язык: {element.original_language}</div>
        <div> Популярность: {element.popularity}</div>
      </div>
    </div>
  );
}

export { AboutMovie };
