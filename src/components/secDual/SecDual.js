import React, { Component } from "react";
import images from "../../../public/icons/watch-series5-logo.png";
export class SecDual extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/home/watch-series-5.jpg"
      })`,
      // height: "100vh",
      MaxWidth: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "580px",
    };
    const demoStyle = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/home/apple-card.jpg"
      })`,
      // height: "100vh",
      MaxWidth: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "580px",
    };

    return (
      <div>
        <div class="container-fluid pt-2">
          <section class="child text-center row">
            <div class="children mb-2 text-center col-md mb-md-1 mx-md-1">
              <div class="pt-5">
                <div class="one">
                  <img src={images} />
                </div>
                <div class="servant">
                  <img src={images} alt="" />
                </div>
                <div class="whith-the-tv">
                  <a href="">watch the tv</a>
                </div>
              </div>
            </div>

            <div class="baby mb-2 text-center pt-5 col-md mb-md-1 mx-md-1">
              <h1>AirPods Pro</h1>
              <p>
                <b>Magic like you’ve never heard.</b>
              </p>
              <p>
                <a class="link" href="#">
                  Learn more{" "}
                </a>
                &nbsp &nbsp
                <a class="link" href="#">
                  {" "}
                  Buy
                </a>
              </p>
              <img src="image/air-pods.jpg" alt="" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SecDual;
