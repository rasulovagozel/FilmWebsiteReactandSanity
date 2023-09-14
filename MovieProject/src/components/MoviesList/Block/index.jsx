import React from "react";
import "./block.scss";
const Block = ({ image, pg, name, category, imdb, ...props }) => {
  return (
    <div {...props} className="col-lg-12 top">
      <div style={{}} className="film-img">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="about">
        <span className="pg">{pg}</span>
        <h3>{name}</h3>
        <h5>{category}</h5>
        <span className="imdb">{imdb}</span>
      </div>
    </div>
  );
};

export default Block;
