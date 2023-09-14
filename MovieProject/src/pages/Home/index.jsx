import React from "react";
import "./home.scss";
import Sidebar from "../../components/Sidebar";
import MainPart from "./MainPart";
import Brands from "./Brands";
import Recent from "./Recent";
import Layout from "../../features/Layout";
import MovieList from "../../components/MoviesList";
const Home = () => {
  return (
    <div className="container">
      <Layout />
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-6">
          <MainPart />
          <Brands />
          <Recent />
        </div>
        <div className="col-lg-3">
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default Home;
