import React, { useEffect } from "react";
import "../css/Scanner.css";
import CameraScanner from "../components/Scanner/CameraScanner";
// import "react-html5-camera-photo/build/css/index.css";
import Navbar from "../components/Navbar";
const title = "RecyclOps | Scanner";
const Scanner = (props) => {
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div>
      <CameraScanner />
      <Navbar />
    </div>
  );
};

export default Scanner;
