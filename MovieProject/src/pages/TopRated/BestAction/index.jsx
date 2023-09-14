import React, { useEffect,useState } from "react";
import BestCard from "./BestCard";
import { Link } from "react-router-dom";
import "./bestaction.scss";
import {client} from "../../../Service/sanity"
import "./bestaction.scss"
// import { getAPI } from "../../../components/Http/Http";
const BestAction = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    client.fetch('*[_type=="bestaction"]').then(res => {
      setData(res);
    });
  }, []);
  return (
    <div className="row">
    {data.map((film) => (
      <div className="col-lg-3 col-md-6 col-sm-12" key={film._id}>
        <Link to={`/toprated/details/${film._id}`}>
          <BestCard
            image={film.image}
            name={film.name}
            imdb={film.imdb}
            category={film.category}
            about={film.about}
            pg={film.pg}
          />
        </Link>
      </div>
    ))}
  </div>
  );
};

export default BestAction;
