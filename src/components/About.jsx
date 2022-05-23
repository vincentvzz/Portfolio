import React from "react";
import zzy_host from '../static_files/img/zzy-host.png';

function About() {
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
              programming, Backend Development, and User-Centered Design. Feel free to get more information at <a class="text-sky-600" href="https://www.linkedin.com/in/vincent-zhiyuan-zhou/">LinkedIn</a> and <a href="https://github.com/vincentvzz">Github</a>.
            </p>

            <p>
              Programming Skillset:
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Azure Cognitive Search</li>
                <li>Azure ML Studio</li>
                <li>...</li>
              </ul>
            </p>
            <p>
              Past experiences include:
              <ul>
                <li>Internship as a Data Engineer and Software Engineer</li>
                <li>Research Assistant for Data-Driven Research</li>
                <li>Several Projects of web programming</li>
                <li>...</li>
              </ul>
            </p>
            <p>
              Hobbies include:
              <ul>
                <li>Team Fight Tactics</li>
                <li>Animes</li>
                <li>Chess</li>
                <li>...</li>
              </ul>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
