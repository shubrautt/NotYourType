import React from "react";

import ImageList from "../ImageList";

import "./style.css";
import mainImg from "../../assets/main.jpg";

const Home = () => {
  return (
    <div className="container home">
      <div className="profile">
        <img src={mainImg} alt="Main" />
        <a href="https://www.instagram.com/sr.xrh/">
          <i className="fa-brands fa-instagram"></i>@SR.XRH
        </a>
      </div>
      <ImageList />
    </div>
  );
};

export default Home;
