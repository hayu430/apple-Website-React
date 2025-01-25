import React, { Component } from "react";
import "../css/styles.css";
import "../css/bootstrap.css";
import "../css/mstyle.css";
export class Tripleiph extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${
        process.env.PUBLIC_URL + "/home/iphone11-colored.jpg"
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
      <div style={myStyle}>
        <section class="iphone-11 macbook text-center">
          <h1 class="mac">iphone 11</h1>
          <p>
            <b> Just the riht amount of everything.</b>
          </p>
          <p class="birr">From $16.62/mo.or$399 with trade-in.</p>
          <p>
            <a class="link" href="#">
              Learn more{" "}
            </a>

            <a class="link" href="#">
              {" "}
              Buy{" "}
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default Tripleiph;
