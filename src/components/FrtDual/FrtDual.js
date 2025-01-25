import React, { Component } from "react";
import "../css/styles.css";
import "../css/bootstrap.css";
import "../css/mstyle.css";
import images from "./apple-tv-logo.png";
import image from "./servant-logo.png";
class FrtDual extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/home/apple-tv-background.jpg"
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
      backgroundImage: `url(${process.env.PUBLIC_URL + "/home/air-pods.jpg"})`,
      // height: "100vh",
      MaxWidth: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "intial",
      height: "580px",
    };
    return (
      <div>
        <div className="container-fluid pt-2">
          <section className="child text-center row">
            <div
              className="children mb-2 text-center col-md mb-md-1 mx-md-1"
              style={myStyle}
            >
              <div className="pt-5">
                <div className="one">
                  <img src={images} alt="" />
                </div>
                <div className="servant">
                  <img src={image} alt="" />
                </div>
                <div className="whith-the-tv">
                  <a href="">watch the tv</a>
                </div>
              </div>
            </div>

            <div
              className="baby mb-2 text-center pt-5 col-md mb-md-1 mx-md-1"
              style={demoStyle}
            >
              <h1>AirPods Pro</h1>
              <p>
                <b>Magic like you’ve never heard.</b>
              </p>
              <p>
                <a className="link" href="#">
                  Learn more{" "}
                </a>

                <a className="link" href="#">
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

export default FrtDual;
