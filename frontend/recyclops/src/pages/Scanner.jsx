import React, { useEffect, useContext } from "react";
import "../css/Scanner.css";
import CameraScanner from "../components/Scanner/CameraScanner";
// import "react-html5-camera-photo/build/css/index.css";
<<<<<<< HEAD
import Navbar from "../components/Navbar";
import { UserContext } from "../Context/UserProvider";

const title = "Scanner";
=======
import Navbar from "../components/global/Navbar";
import BackButton from "../components/global/BackButton";
const title = "RecyclOps | Scanner";
>>>>>>> cd8dedb76820bc0a82ca149272bf3ef2f27e9a8a
const Scanner = (props) => {
  const user = useContext(UserContext);

  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div>
<<<<<<< HEAD
      <CameraScanner user={user} />
=======
      <BackButton />
      <CameraScanner />
>>>>>>> cd8dedb76820bc0a82ca149272bf3ef2f27e9a8a
      <Navbar />
    </div>
  );
};

export default Scanner;
