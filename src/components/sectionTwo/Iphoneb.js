import React, { Component } from "react";
import "../css/styles.css";
import "../css/bootstrap.css";
import "../css/mstyle.css";
class Iphoneb extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/iphone11-pro-bg.jpg"
      })`,
      // height: "100vh",
      MaxWidth: "100%",
      // marginTop: "-70px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "580px",
    };

    return (
      <div style={myStyle}>
        <section className="iphone text-center">
          <div>
            <h1 className="mac-iphone">iphone 11 pro</h1>
            <p>
              <b className="pro">Pro cameras.pro display.pro performance</b>
            </p>
            <p className="birr">From $24.95/mo.or$599 with trade-in.</p>
            <p>
              <a className="link" href="#">
                Learn more{" "}
              </a>

              <a className="link" href="#">
                {" "}
                Buy{" "}
              </a>
            </p>
          </div>
        </section>
      </div>
    );
  }
}
export default Iphoneb;

// copy
// Filename - App.js
// import
