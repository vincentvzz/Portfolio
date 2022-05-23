import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Projects,
  IslandWood,
  Posts,
  Post,
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />}>
        <Route path="islandwood" element={<IslandWood />} />
        {/* <Route path="" element={<Projects />} /> */}
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
