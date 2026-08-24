//import SlideShow from "../SlideShow/SlideShow";
import styles from "./DisplayRow.module.css";
import { MovieInstance } from "../../Utility/MovieInstance";
import { useEffect, useState } from "react";
import requests from "../../Utility/MovieRequest";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [
          trendingsRes,
          netflixRes,
          topRatedRes,
          actionRes,
          comedyRes,
          horrorRes,
          romanceRes,
          documentariesRes,
        ] = await Promise.all([
          MovieInstance.get(requests.fetchTrending),
          MovieInstance.get(requests.fetchNetflixOriginals),
          MovieInstance.get(requests.fetchTopRatedMovies),
          MovieInstance.get(requests.fetchActionMovies),
          MovieInstance.get(requests.fetchComedyMovies),
          MovieInstance.get(requests.fetchHorrorMovies),
          MovieInstance.get(requests.fetchRomanceMovies),
          MovieInstance.get(requests.fetchDocumentaries),
        ]);

        setMovies({
          trending: trendingsRes.data.results,
          netflixOriginals: netflixRes.data.results,
          topRated: topRatedRes.data.results,
          action: actionRes.data.results,
          comedy: comedyRes.data.results,
          horror: horrorRes.data.results,
          romance: romanceRes.data.results,
          documentaries: documentariesRes.data.results,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Netflix Trending" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Action" movies={movies.action} />
      <SlideShow title="Top Rated" movies={movies.topRated} />
      <SlideShow title="Comedy" movies={movies.comedy} />
      <SlideShow title="Horror" movies={movies.horror} />
      <SlideShow title="Romance" movies={movies.romance} />
      {/* <SlideShow title="Documentaries" movies={movies.documentaries} /> */}
    </div>
  );
}
export default DisplayRow;
