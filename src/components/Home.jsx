import React from "react";
import logo from './logo.svg';
import zzy_host from '../static_files/img/zzy-host.png';

console.log(logo);

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={zzy_host}
              alt="zzy-host"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hi, I am Vincent!</h1>
            <p>
              I am a 3rd year student at University of Washington studying Human Centered Design
              and Engineering with a Data Science focus. I am passionate about Data Science, Web
              programming, Backend Development, and User-Centered Design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
