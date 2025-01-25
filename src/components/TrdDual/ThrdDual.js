import React, { Component } from "react";
import seclogo from "./new-ipad-logo.png";
import "../css/styles.css";
import "../css/bootstrap.css";
import "../css/mstyle.css";
class ThrdDual extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/home/macbook-pro.jpg"
      })`,
      // height: "100vh",
      MaxWidth: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "intial",
      height: "580px",
    };
    const demoStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL + "/home/new-ipad.jpg"})`,
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
        <div className="container-fluid">
          <section className="last-section text-center pt-2 row">
            <div
              className="macbook-pro mb-2 col-md mb-md-1 mx-md-1"
              style={myStyle}
            >
              <div className="pt-3">
                <p>16-inch mode</p>
              </div>

              <h1 className="mac">MacBook Pro</h1>
              <p>
                <b className="best">The best for the brightest.</b>
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
            <div
              className="jazz-sprint col-md mb-md-1 mx-md-1"
              style={demoStyle}
            >
              <div>
                <img className="pt-4" src={seclogo} alt="" />
              </div>
              <div>
                <p></p>
              </div>
              <p>
                <b className="best">Like a computer .unlike any computer</b>
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
          </section>
        </div>
      </div>
    );
  }
}

export default ThrdDual;
