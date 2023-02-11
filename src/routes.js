import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import News from "./components/Pages/News";
import Contact from "./components/Pages/Contact";
import Shop from "./components/Pages/Shop";
import SingleNew from "./components/News/SingleNew";

const RouteLink = ({ datas }) => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/news/*" element={<News datas={datas} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/single-new" element={<SingleNew />} />
    </Routes>
  );
};

export default RouteLink;
