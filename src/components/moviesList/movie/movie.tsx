import "./movie.css";

type MovieInterface = {
  title: string
  voteAverage: number
}

export default function Movie(value: MovieInterface) {
  return (
    <div className="movie__block">
      <div className="movie__block-image">
        <img src="./assets/images/time.jpg" alt="" />
      </div>
      <div className="movie__block-data">
        <div className="movie__block-data-information">
          <div className="movie__block-data-information-rating">
           Рейтинг: {value.voteAverage}
          </div>
          <div className="movie__block-data-information-star">
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <rect fill="none" height="256" width="256" />
              <path
                d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                opacity="0.2"
              />
              <path
                d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                fill="#fff"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
          <div className="movie__block-data-information-star">
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <rect fill="#fff" height="256" width="256" />
              <path
                d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
                opacity="0.2" fill="#fff"
              />
              <path
                d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </div>
        </div>
        <div className="movie__block-data-title">
        {value.title}
        </div>
        <a className="about_movie" href="/">
          Подробнее
        </a>
      </div>
    </div>
  );
}
