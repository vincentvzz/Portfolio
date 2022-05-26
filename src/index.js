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
  OpenHallway
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />}>
        {/* <Route path="islandwood" element={<IslandWood />} /> */}
        {/* <Route path="openhallway" element={<OpenHallway />} /> */}
      </Route>
      <Route path="/projects/islandwood" element={<IslandWood />}/>
      <Route path="/projects/openhallway" element={<OpenHallway />}/>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
