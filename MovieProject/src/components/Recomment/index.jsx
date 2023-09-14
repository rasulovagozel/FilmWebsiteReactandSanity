import React, { useEffect } from "react";
import Rec_Card from "./Rec_Card";
import { client } from "../../Service/sanity";
import "./recomment.scss"
const Recomment = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    client.fetch("*[ _type=='recommend']").then((res) => {
        console.log(res)
      setData(res);
    });
  },[]);

  return (
    <div className="container right">
      <div className="row">
        <div className="col-lg-12">
          <h2>Recommendatiion</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {data &&
            data.map((f, index) => {
              return(<Rec_Card
                key={index}
                image={f.image}
                name={f.name}
                imdb={f.imdb}
                category={f.category}
              />)
            })}
        </div>
      </div>
    </div>
  );
};

export default Recomment;
