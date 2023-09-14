import React, { useState, useEffect } from "react";
import "./card.scss";
import { urlFor } from "../../../Service/sanity";
import { RiFilmFill } from "react-icons/ri";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BsFillShareFill } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"
const Card = ({ image, pg, name, category, imdb, about, ...props }) => {
  const [skeletonImg, setSkeletonImg] = useState("");
  const [skeletonPg, setSkeletonPg] = useState("");
  const [skeletonName, setSkeletonName] = useState("");
  const [skeletonImdb, setSkeletonImdb] = useState("");
  const [skeletonCategory, setSkeletonCategory] = useState("");
  const [skeletonAbout, setSkeletonAbout] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSkeletonImg(image);
      setSkeletonPg(pg);
      setSkeletonName(name);
      setSkeletonImdb(imdb);
      setSkeletonCategory(category);
      setSkeletonAbout(about);
    }, 2000);
  });
  return (
    <div className="film-details" {...props}>
      <div className="image">
        {
          skeletonImg && (<img src={urlFor(image)} alt="" />)
        }
        {
          !skeletonImg && <Skeleton baseColor="#78828A" count={1} width="100%" height="350px" />
        }
      </div>
      <div className="info">
        <div className="about">
          <p>{skeletonPg || <Skeleton baseColor="#78828A"  count={1} width="40px" />}</p>
          <h3>{skeletonName || <Skeleton baseColor="#78828A"  count={1} width="230px" height="50px" /> }</h3>
          <h5>
            <RiFilmFill />
            {skeletonCategory || <Skeleton baseColor="#78828A"  count={1} width="100px" height="20px" /> }
          </h5>
          <div className="star">
            <AiFillStar />
            <span>{skeletonImdb || <Skeleton baseColor="#78828A"  count={1} width="50px" height="20px" /> }</span>
          </div>
        </div>
        <div className="down_share_like">
          <div className="download">
            <PiDownloadSimpleBold />
            <p>Download</p>
          </div>
          <div className="share">
            <BsFillShareFill />
            <p>Share</p>
          </div>
          <div className="like">
            <AiFillLike />
            <p>Like</p>
          </div>
        </div>
      </div>
      <div className="story">
        <h3>Story Line</h3>
        <h4>{skeletonAbout || <Skeleton baseColor="#78828A"  count={1} width="650px" height="100px" /> }</h4>
      </div>
    </div>
  );
};

export default Card;
