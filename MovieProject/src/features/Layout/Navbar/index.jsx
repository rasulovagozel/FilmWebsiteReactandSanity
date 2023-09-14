import React from 'react';
import "./navbar.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {LuBellRing} from "react-icons/lu";
import {IoIosArrowDown} from "react-icons/io";
import {useState,useEffect} from "react"
import {client} from "../../../Service/sanity"
const Navbar = () => {
    // const [data, setData] = useState([]);
    // const [query, setQuery] = useState("");
    // const [category, setCategory] = useState("");
    // useEffect(() => {
    //   setCategory();
    // }, []);
    // useEffect(() => {
    //   if (query === "") {
    //     setCategory(client.fetch('*[_type=="bestaction"]').then(res => {
    //         setData(res);
    //       }))
    //   }
    // }, [query]);
  
    // const HandleSearch = (e) => {
    //   setQuery(e.target.value);
    //   console.log(query);
    //   setCategory(
    //     client.fetch('*[_type=="bestaction"]').then(res => {
    //         setData(res);
    //       }).filter((item) => {
    //       return item.category.toLowerCase().includes(query.toLowerCase());
    //     })
    //   );
    // };
    
  return (
    <nav>
     <div className="container">
        <div className="row g-3">
            <div className="col-lg-3">
                <div className="logo">
                    <p>Cinemax</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="lists">
                    <ul>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Series</a></li>
                        <li><a href="">Animation</a></li>
                        <li><a href="">Genres</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" name="search" id="search" placeholder='Search...' />
                  <AiOutlineSearch className='search-icon'  />
                </div>
            </div>
            <div className="col-lg-3 g-3 subs">
                    <div className="btn">
                    <button>Subscribe</button>
                    </div>
                    <div className="ring">
                        <LuBellRing className='ring-icon' />
                        <p>3</p>
                    </div>
                    <div className="profile">
                        <img src="https://s3-alpha-sig.figma.com/img/7e3b/068d/85e547402d34fbd27bc2964d93d9148b?Expires=1693785600&Signature=eZsZ-GJb9RweaGAa3oOgWBdioRIZtjgBPz6R8sUcgOdiK5KQSfRXN5cy~YsxEu4dh6dqM1sJ8N9Ol6vZOWHc3cWV221pYjqEy14vHYYZUbXCrQVbJlcbcPIcLrc~KalJhZXBLS0AxiXFpY~xn2NJgrV7yT6I0M477IoQ-mpWWHL0FZscQ8YV7e7TF3YxMnN~JJh6i3dAt7sW4DOpPU7SyuuHPzXmaahpctkkLVKXH2i8549FBQkg47rGAP6vmB-qApYSbw5ww5souFL4~89G-Eyr3BDnKw1j8tw2VrEeangHRsLTM7zYK9ML2Xu4BVRRd8r6niCYW0DvN-pNU-3n3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <IoIosArrowDown className='arrow' />
                    </div>
            </div>
        </div>
     </div>
    </nav>
    
  )
}

export default Navbar