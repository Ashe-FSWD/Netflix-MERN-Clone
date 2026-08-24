import React from 'react'
import SlideShow from "../SlideShow/SlideShow";
import styles from './Display.module.css'
 import { movieInstance } from "../../Utility/MovieInstance"
import { useEffect, useState } from "react";
import requests from '../../Utility/MovieRequest'

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
          movieInstance.get(requests.fetchTrending),
          movieInstance.get(requests.fetchNetflixOriginals),
          movieInstance.get(requests.fetchTopRatedMovies),
          movieInstance.get(requests.fetchActionMovies),
          movieInstance.get(requests.fetchComedyMovies),
          movieInstance.get(requests.fetchHorrorMovies),
          movieInstance.get(requests.fetchRomanceMovies),
          movieInstance.get(requests.fetchDocumentaries),
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
   

