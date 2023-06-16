import React from "react";
import HeroBanner from "./HeroBanner";
import Message from "./Message";
import Service from "./Service";
import Skin from "./Skin";

const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Service></Service>
      <Skin></Skin>
      <Message></Message>
    </div>
  );
};

export default Home;
