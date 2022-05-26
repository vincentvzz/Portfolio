import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import zzy_host from '../static_files/img/zzy-host.png';
import cover from '../static_files/img/IslandWood/cover.png';
import cover2 from '../static_files/img/OpenHallway/cover.png';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <h1 class="font-weight-light">Hi, I am Vincent!</h1>
            <p>
              Here is my website. Feel free to explore and see my journey as a UI/UX Designer.
            </p>
          </div>
        </div>
        <h4 className="mt-5">My Past Projects:</h4>
        <NavLink to="/projects/islandwood">
          <div class="row align-items-center my-5 border-black">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={cover}
                alt="cover"
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">IslandWood Contaction Redesign</h1>
              <p>
                  Time: Jan 2022 ~ Mar 2022
              </p>
              <p>
                  Role: UI/UX Designer (Individual)
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to="/projects/openhallway">
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={cover2}
                alt="cover"
              />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Open Hallway</h1>
              <p>
                Time: Apr 2021 ~ June 2021
              </p>
              <p>
                  Role: UI/UX Designer (Group)
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
