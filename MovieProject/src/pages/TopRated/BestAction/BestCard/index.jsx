import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./best-card.scss"
import {urlFor} from "../../../../Service/sanity"
import {AiFillStar} from "react-icons/ai"
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css"

const BestCard = ({id,image,name,imdb,category,about,pg,...props}) => {
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
      <div className="best-films" {...props}>
      {
          skeletonImg && (<img src={urlFor(image)} alt="" />)
        }
        {
          !skeletonImg && <Skeleton baseColor="#78828A" width="100%" height="120px" />
        }
        <p>{skeletonName || <Skeleton baseColor="#78828A" width="250px" height="20px" />}</p>
        <div className="about">
          <div className="imdb">
            <AiFillStar />
            <span>{skeletonImdb || <Skeleton baseColor="#78828A" width="30px" height="15px" />}</span>
          </div>
          <div className="category">
            <span>{skeletonCategory || <Skeleton baseColor="#78828A" width="80px" height="15px" />}</span>
          </div>
        </div>
      </div>
  )
}

export default BestCard