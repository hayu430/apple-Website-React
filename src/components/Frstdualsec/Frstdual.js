import React, { Component } from "react";
import Images from "./watch-series5-logo.png";
import secdimage from "./apple-card-logo.png";
class Frstdual extends Component {
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
        <div className="container-fluid">
          <section className="two-photo text-center row ">
            <div className="watch mb-2 col-md my-md-1 mx-md-1" style={myStyle}>
              <div className="pt-5">
                <img className="watch-logo" src={Images} alt="" />
                <p className="center">
                  With the new Always-On Retina display. <br />
                  You’ve never seen a watch like this.
                </p>
                <p>
                  <a className="link center" href="#">
                    Learn more{" "}
                  </a>

                  <a className="link center" href="#">
                    {" "}
                    Buy
                  </a>
                </p>
              </div>
            </div>

            <div
              className="apple-card  col-md mt-2 my-md-1 mx-md-1"
              style={demoStyle}
            >
              <div className="pt-5">
                <img className="card-logo" src={secdimage} alt="" />
                <p className="text-center">
                  Get 3% Daily Cash on purchases from Apple using Apple Card.
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
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Frstdual;
