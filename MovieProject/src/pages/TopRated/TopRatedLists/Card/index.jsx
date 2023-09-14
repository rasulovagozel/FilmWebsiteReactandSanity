import React from 'react'
import "./card.scss"
import {useState,useEffect} from "react"
import {RiFilmFill} from "react-icons/ri"
import {AiFillStar} from "react-icons/ai"
import { urlFor } from '../../../../Service/sanity'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css"

const index = ({id,image,pg,name,category,imdb,...props}) => {
  const [skeletonId,setSkeletonId]=useState("");
  const [skeletonImg, setSkeletonImg] = useState("");
  const [skeletonPg,setSkeletonPg]=useState("");
  const [skeletonName, setSkeletonName] = useState("");
  const [skeletonCategory, setSkeletonCategory] = useState("");
  const [skeletonImdb, setSkeletonImdb] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSkeletonId(id);
      setSkeletonImg(image);
      setSkeletonPg(pg);
      setSkeletonName(name);
      setSkeletonImdb(imdb);
      setSkeletonCategory(category);
    }, 2000);
  });

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-4">
    <div className="cards" {...props}>
    <div className="count">
      <p>{skeletonId || <Skeleton baseColor="#78828A" count={1} width="30px" />}</p>
    </div>
    <div className="image">
    {
          skeletonImg && (<img src={urlFor(image)} alt="" />)
        }
        {
          !skeletonImg && <Skeleton baseColor="#78828A" width="100%" height="180px" />
        }
    </div>
    <div className="texts">
      <span className='pg'>{skeletonPg || <Skeleton baseColor="#78828A" count={1} width="40px" />}</span>
      <h2>{skeletonName || <Skeleton baseColor="#78828A" count={1} width="150px" />}</h2>
      <div className="category">
      <RiFilmFill />
      <span>{skeletonCategory || <Skeleton baseColor="#78828A" count={1} width="50px" />}</span>
      </div>
      <div className="star">
        <AiFillStar />
        <span>{skeletonImdb || <Skeleton baseColor="#78828A" count={1} width="40px" />}</span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default index