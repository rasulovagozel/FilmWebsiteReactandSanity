import React, { useEffect, useState,CSSProperties } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../Service/sanity";
import Card from "./Card";
import Layout from "../../features/Layout";
import Sidebar from "../../components/Sidebar";
import Recomment from "../../components/Recomment";
import Comment from "../../components/Comment";
import ClipLoader from "react-spinners/ClipLoader";
import "./film.scss";
const FilmDetails = () => {

  const { filmId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "bestaction" && _id == "${filmId}"][0]`)
      .then((res) => {
        setFilm(res);
      });
  }, [filmId]);

  if (!film) {
    return <div>Loading...</div>;
  }

 
  return (
    <div className="container">
      <div className="row">
        <Layout />
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <Card
                pg={film.pg}
                image={film.image}
                name={film.name}
                imdb={film.imdb}
                category={film.category}
                about={film.about}
              />
            </div>
            <div className="col-lg-12">
              <Comment />
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <Recomment />
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
