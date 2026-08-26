import styles from "./MovieCard.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  let genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.card}>
      {/* Poster image */}
      <img
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt={movie.title}
        className={styles.poster}
      />

      {/* Hover Card */}
      <div className={styles.hoverCard}>
        {/* Hover image */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt={movie.title}
        />

        {/* Badge */}
        <div className={styles.badge}>{movie.badge}</div>

        {/* Title */}
        <h3 className={styles.title}>{movie.title}</h3>

        {/* Button row */}
        <div className={styles.buttonRow}>
          <FaPlayCircle className="circleBtn" color="white" size={40} />

          <BsPlusCircle className="circleBtn" color="white" size={40} />

          <GoCheckCircleFill className="circleBtn" color="white" size={40} />

          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* Metadata row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* Genres */}
        <div className={styles.genres}>
          {movie.genres?.map((g, index) => {
            return (
              <span key={g}>
                {g}
                {index !== genres.length - 1 && (
                  <span className={styles.dot}>.</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
