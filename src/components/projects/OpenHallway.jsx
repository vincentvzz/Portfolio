import React from "react";

import research from '../../static_files/img/OpenHallway/research.webp';
import personas1 from '../../static_files/img/OpenHallway/personas1.webp';
import userjourney from '../../static_files/img/OpenHallway/userjourney.webp';
import infoarchitecture from '../../static_files/img/OpenHallway/infoarchitecture.webp';
import hifi1 from '../../static_files/img/OpenHallway/hifi1.webp';

function OpenHallway() {
    return (
    <div className="home">
      <div class="container overflow-visible">

        <div class="row align-items-center my-5">
            <div class="col-lg-12">
                <h2 className="mt-5">Research</h2>
                <p>
                    The initial research for Open Hallway was conducted through four semi-structured interviews over Zoom with students attending the University of Washington. The team developed interview questions and protocol that examined college students’ relationships with social media, remote learning, and mental health during the COVID-19 pandemic. Following the interviews, the team coded the transcripts to extract overarching themes and formulate our final research insights.
                </p>
            </div>
            <div class="col-lg-12">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={research}
                    alt="logo"
                />
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-6">
                <h2 className="mt-5">Personas</h2>
                <p>
                    From our interviews, we created a set of personas that embodied users’ overarching characteristics, skill sets, pain points, and goals. The personas guided future work in Open Hallway by providing a deeper understanding of user motives and contextualizing their actions and desires. Although boiling down our entire target user group into two hypothetical people seems impractical, these provided appropriate guidelines for the features that potential users would want in the final design.
                </p>
            </div>
            <div class="col-lg-6">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={personas1}
                    alt="personas1"
                />
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-5">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={userjourney}
                    alt="userjourney"
                />
            </div>
            <div class="col-lg-7">
                <h2 className="mt-5">User Journey Map</h2>
                <p>
                    For the journey map, we selected one of the personas, Chihiro, and mapped out the interactions and experiences she has on an average day. As Chihiro surfed her phone, cooked meals, and attended class, we plotted out her potential emotional journey with each action. These actions and emotions are drawn from our previous user research through the interviews and personas, so they appropriately reflect a typical day for our target user. This visualization allowed us to further identify user pain points and envision where and how Open Hallway could integrate into a college student’s life.
                </p>
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-12">
                <h2 className="mt-5">Design Requirements</h2>
                <p>
                    With the conclusion of the user research phases, we created a list of design requirements and goals for the final application. To appropriately address the negative effects of social media on  of college students in remote learning, we decided Open Hallway should do the following:
                </p>
                <ul>
                    <li>Reduce the amount of time spent on social media</li>
                    <li>Improve the quality of interactions on social media platforms</li>
                    <li>Provoke reflection on user’s social media use</li>
                    <li>Eliminate social reward mechanisms and other addictive features</li>
                    <li>Bring awareness to the user’s own social media use and its effects on mental health</li>
                    <li>Create a space for users to develop and maintain friendships with classmates</li>
                </ul>
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-12">
                <h2 className="mt-5">Information Architecture</h2>
                <p>
                    We constructed the information architecture as a reference for the product structure. The information architecture shows five sub-paths of Open Hallway, which is consistent with both low-fidelity and high-fidelity prototypes. Also, the information architecture helps us determine some of the sub-tasks that users will go through in prototype testing as well as Open Hallway (the final product).
                </p>
            </div>
            <div class="col-lg-12">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={infoarchitecture}
                    alt="inforarchitecture"
                />
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-8">
                <h2 className="mt-5">Hi-Fidelity Prototype</h2>
                <p>
                    Using a the results of all out prior artifacts, we edited our screens and decided what needed to be added and removed. We searched the internet for inspiration on what we wanted our app's aesthetic to be and decided on a color scheme and vibe that evoked serenity and wellness. The color palette was mostly muted greens, blues, beige, and brown tones.
                </p>
            </div>
            <div class="col-lg-4">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={hifi1}
                    alt="hifi1"
                />
            </div>
        </div>

        <div>
            <h2 className="mt-5">Reflection</h2>
            <p>
                This is my first user-centered design project with teammates. I worked on all the stages of a user-centered design project cycle, from User Research to Prototyping and User Testing. The final product is not perfectly polished, but it has been gone through the whole process with a clear purpose derived from User Research stage.
            </p>
            <p>Experience gained:
                <ul>
                    <li>User Research</li>
                    <li>Personas</li>
                    <li>User Journey Map</li>
                    <li>Information Architecture</li>
                    <li>Wireframes</li>
                    <li>Prototyping</li>
                    <li>User Testing</li>
                </ul>
            </p>
        </div>

        <p></p>
      </div>
    </div>
    );
}

export default OpenHallway;