import React from "react";
import "../css/Scanner.css";
import CameraScanner from "../components/Scanner/CameraScanner";
// import "react-html5-camera-photo/build/css/index.css";
import Navbar from "../components/Navbar";
const Scanner = (props) => {
  return (
    <div>
      <CameraScanner />
      <Navbar />
    </div>
  );
};

export default Scanner;
