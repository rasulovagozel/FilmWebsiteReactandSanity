import React,{useState,useEffect} from 'react'
import Layout from '../../features/Layout'
import Sidebar from '../../components/Sidebar'
import TopRatedLists from './TopRatedLists'
import "./toprated.scss"
import BestAction from "./BestAction"
import FilmDetails from '../FilmDetails/FilmDetails'
const TopRated = () => {
  return (
    <div className="container top-rated">
        <div className="row">
        <Layout />
        </div>
        <div className="row main">
        <div className="col-lg-3">
            <Sidebar />
        </div>
        <div className="col-lg-9">
            <div className="row">
                <div className="col-lg-12 first-section">
                <div className="row">
                    <div className="col-lg-12"><h2 className='header'>Top Rated</h2></div>
                    <div className="col-lg-12">
                        <TopRatedLists />
                    </div>
                </div>
                </div>
                <div className="col-lg-12 second-section">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className='header'>Best of Action</h2>
                    </div>
                    <div className="col-lg-12">
                        <BestAction />
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TopRated