import React, { useEffect, useContext } from "react";
import "../css/Scanner.css";
import CameraScanner from "../components/Scanner/CameraScanner";
// import "react-html5-camera-photo/build/css/index.css";
import Navbar from "../components/Navbar";
import { UserContext } from "../Context/UserProvider";

const title = "Scanner";
const Scanner = (props) => {
  const user = useContext(UserContext);

  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div>
      <CameraScanner user={user} />
      <Navbar />
    </div>
  );
};

export default Scanner;
