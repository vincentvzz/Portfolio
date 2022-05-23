import React from "react";

import logo from '../../static_files/img/IslandWood/logo.png';
import color from '../../static_files/img/IslandWood/color.png';
import typography from '../../static_files/img/IslandWood/typography.png';
import mobileflow from '../../static_files/img/IslandWood/mobile-flow.png';

function IslandWood() {

  return (
    <div className="home">
      <div class="container overflow-visible">
        <div class="row align-items-center my-5">
            <h2 className="mt-5">Client and Audience</h2>
            <p>
                IslandWood is an organization that provides education about environmental protection throughout the Seattle region for all-ages people.
            </p>
            <p>
                IslandWood provides events related to environmental education in public as well as opens positions of voluntary works. Also, audiences can sign up for newsletters to receive information periodically. It has social media accounts (e.g. twitter) that help advertise their events. The events’ contents are largely connected to protecting the environment.
            </p>
            <p>
                Both the website and IslandWood provides services for <b>K-12 students/kids and educators</b>, who are the primary audiences. The secondary audiences may include <b>parents of K-12 students</b>.
            </p>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-5">
                <h2 className="mt-5">Logo</h2>
                <p>
                    I used a broken tree branch to imply that the environment <b>is broken</b> (or not being protected).
                </p>
                <p>
                    I used an annual ring to further elaborate the <b>broken environment</b>.
                </p>
                <p>
                    I used serif typeface for showing <b>gentle emotions</b> and stay consistent with the broken tree's root part.
                </p>
                <p>
                    I put broken tree and annual ring into the text for keeping minimum space the logo will use.
                </p>
            </div>
            <div class="col-lg-7">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={logo}
                    alt="logo"
                />
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-7">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={color}
                    alt="color"
                />
            </div>
            <div class="col-lg-5">
                <h2 className="mt-5">Color Scheme</h2>
                <p>
                    I mainly used green to illustrate the element of environment in my design. I also used gentle gradient as adding variety of my color palette to communicate information softly. Furthermore, I integrate blue and red to make my design more playful for my audiences.
                </p>
            </div>
        </div>

        <div class="row align-items-center my-5">
            <div class="col-lg-5">
                <h2 className="mt-5">Typography</h2>
                <p>
                    I used san-serif to keep consistent with my logo as well as conveying my idea gently to audiences.
                </p>
            </div>
            <div class="col-lg-7">
                <img
                    class="img-fluid rounded mb-4 mb-lg-0"
                    src={typography}
                    alt="typography"
                />
            </div>
        </div>

        <div>
            <h2 className="mt-5">Mobile Flow: Contact With Graduate Program</h2>
            <p>
                The task is to get contact information of graduate program at IslandWood.
            </p>
            <p>
                Currently, there are two pain points. First, users are forced to scroll down the main page so that they can get the button of contacting information. Second, the contact information page contains all the information regardless of programs, which is hard for users to find out the correct information directly.
            </p>
        </div>
        <div class="my-50">
            <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={mobileflow}
                alt="mobile flow"
            />
        </div>
        <p></p>
      </div>
    </div>
  );
}

export default IslandWood;
