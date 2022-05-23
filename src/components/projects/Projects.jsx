import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import cover from '../../static_files/img/IslandWood/cover.png';

function Projects() {
  return (
    <div className="home">
      <div class="container">
        <Link to="/projects/islandwood">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={cover}
                alt="cover"
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">IslandWood Contaction Redesign</h1>
            </div>
          </div>
        </Link>

        <Outlet />
      </div>
    </div>
  );
}

export default Projects;
