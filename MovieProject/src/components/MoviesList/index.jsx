import React, { useEffect, useState } from "react";
import "./movies.scss";
import Block from "./Block";
import { getAPI } from "../Http/http";
const MovieList = () => {
  const [data, setData] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    getData();
    return () => {
      setIsMounted(false);
    };
  }, []);

  const getData = async () => {
    getAPI("films").then((res) => {
      setData(res.data);
    });
  };




  return (
    <div className="container movie">
      <div className="row">
        <div className="col-lg-12">
          <h2>Top Movie</h2>
        </div>
      </div>
      <div className="row list">
        {data &&
          data.map((p, index) => {
            const { image, pg, name, category, imdb } = p;
            return (
              <Block
                key={index}
                image={image}
                pg={pg}
                name={name}
                category={category}
                imdb={imdb}
              />
            );
          })}
      </div>
      <div className="row">
        <div className="col-lg-12">
          <button className="all">See All</button>
        </div>
      </div>
      <div className="row categories">
        <div className="col-lg-12 search">
          <h2>Favorites Genres</h2>
          <input type="search" placeholder="Search.." />
        </div>
        <div className="col-lg-12 buttons">
          <button name="action">Action</button>
          <button name="fantasy">Fantasy</button>
          <button name="comedy">Comedy</button>
          <button name="sci-fi">Sci-Fi</button>
          <button name="drama">Drama</button>
          <button name="romance">Romance</button>
          <button name="mystery">Mystery</button>
          <button name="horror">Horror</button>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
