import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Footer from "./components/footer/footer.js";
import Iphoneb from "./components/sectionTwo/Iphoneb.js";
import Frstdual from "./components/Frstdualsec/Frstdual.js";
import ThrdDual from "./components/TrdDual/ThrdDual.js";
import FrtDual from "./components/FrtDual/FrtDual.js";

import Header from "./components/MHeader";
import Frstheader from "./components/Frstheader.js";
import Tripleiph from "./components/Section4/Tripleiph.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Frstheader />
    <Header />
    <Iphoneb />
    <Tripleiph />
    <Frstdual />
    <FrtDual />
    <ThrdDual />

    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
