import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "./request";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchDocumentaries);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movie?.backdrop_path}
           )`,

          backgroundPosition: "center",
          height: 350,
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <div className="banner_btns">
            <button className="banner_btn">Play</button>
            <button className="banner_btn">My List</button>
          </div>

          {/* <h1 className="banner_discription"> {movie?.overview}</h1> */}
        </div>
        <div className="fade_btn" aline={"button"}>
          <h1 className="aswin" />
        </div>
      </header>
    </div>
  );
}

export default Banner;
