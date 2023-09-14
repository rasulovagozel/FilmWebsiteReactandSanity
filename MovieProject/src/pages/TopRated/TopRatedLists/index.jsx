import React, { useState, useEffect } from "react";
import Card from "./Card";
// import { getAPI } from "../../../components/Http/Http";
import "./topratedlists.scss";
import {client,urlFor} from "../../../Service/sanity"
const TopRatedLists = () => {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   getAPI("films").then((res) => {
  //     setData(res.data);
  //   });
  // };
  const [film,setFilm] =React.useState([]);
  useEffect(()=>{
   client.fetch("*[ _type=='film']").then((res)=>{
    setFilm(res);
   })
  },[])
  return (
      <div className="row films">
        {film &&
          film.map((data, index) => {
            return (
              <Card
              key={index}
                id={data.id}
                image={data.image}
                pg={data.pg}
                name={data.name}
                category={data.category}
                imdb={data.imdb}
              />
            );
          })}
      </div>
  );
};

export default TopRatedLists;
