import React, { useState, useEffect } from "react";
import NetflixLogo from "../../assets/image/logo.png";
import styles from "../Banner/Banner.module.css";
import { Play, Info } from "lucide-react";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/MovieRequest";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ... " : str;
  }

  return (
    <div
      className={styles.banner}
      style={{
        height: "600px",
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path}")`,
      }}
    >
      <div className={styles.content}>
        <img className={styles.logo} src={NetflixLogo} alt="Netflix logo" />
        <h1 className={styles.title}>{bannerImage?.original_name}</h1>
        <h1 className={styles.description}>
          {truncate(bannerImage?.overview, 120)}
        </h1>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            <Play size={30} />
            Play
          </button>
          <button className={styles.button}>
            <Info size={30} />
            More Info
          </button>
        </div>
        <div className={styles.fadeBottom}>{/* fading */}</div>
      </div>
    </div>
  );
}

export default Banner;
