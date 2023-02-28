import React, { useContext } from "react";
import "../css/Scanner.css";
import CameraScanner from "../components/Scanner/CameraScanner";
// import "react-html5-camera-photo/build/css/index.css";
import { UserContext } from "../Context/UserProvider";

// const title = "Scanner";
import Navbar from "../components/global/Navbar";
import BackButton from "../components/global/BackButton";
import SEO from "../components/global/SEO";
const Scanner = (props) => {
  const user = useContext(UserContext);

  // useEffect(() => {
  //   document.title = title;
  // }, []);
  return (
    <div>
      <SEO
        title="RecyclOps | Scanner"
        description="AI powered tool for waste management"
        authors="Ishar Jain Prabkirat Singh Bhavya Giri Diksha Raj"
        name="RecyclOps"
        keywords="Trash Disposal AI React Sustainable Development Game"
      />
      <BackButton />
      <CameraScanner user={user} />
      <Navbar />
    </div>
  );
};

export default Scanner;
