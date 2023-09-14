import React,{useState,useEffect} from "react";
import { urlFor } from "../../../Service/sanity";
import {AiFillStar} from "react-icons/ai"
import {RiFilmFill} from "react-icons/ri"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./card.scss"

const Rec_Card = ({ image, name, imdb, category }) => {
  const [skeletonImg, setSkeletonImg] = useState("");
  const [skeletonName, setSkeletonName] = useState("");
  const [skeletonImdb, setSkeletonImdb] = useState("");
  const [skeletonCategory, setSkeletonCategory] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSkeletonImg(image);
      setSkeletonName(name);
      setSkeletonImdb(imdb);
      setSkeletonCategory(category);
    }, 2000);
  });
  return (
    <div className="right-side">
      <div className="image">
        {
          skeletonImg && (<img src={urlFor(image)} alt="" />)
        }
        {
          !skeletonImg && <Skeleton baseColor="#78828A" width="100%" height="170px" />
        }
      </div>
      <div className="text">
      <p>{skeletonName || <Skeleton baseColor="#78828A" width="250px" height="20px" />}</p>
      </div>
      <div className="icon">
      <div className="star">
        <AiFillStar />
        <span>{skeletonImdb || <Skeleton baseColor="#78828A" width="50px" height="15px" />}</span>
      </div>
      <div className="category">
        <RiFilmFill />
        <span>{skeletonCategory || <Skeleton baseColor="#78828A" width="50px" height="15px" />}</span>
      </div>
      </div>
    </div>
  );
};

export default Rec_Card;
