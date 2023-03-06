import React from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineMenuBook } from "react-icons/md";
import logo from "../Assets/ProfileLogo.png";
const AboutUs = () => {
  return (
    <div>
      <h1 className="flex items-center gap-1 p-5 font-dosis text-4xl font-bold text-greenPrimary">
        <MdOutlineMenuBook />
        About Us
      </h1>
      <img src={logo} className="absolute top-[25vh] h-[50vh]" />
      <div className="m-5 rounded-md bg-gray-300 bg-opacity-5 p-5 font-dosis text-xl font-medium drop-shadow-lg backdrop-blur-lg">
        Lorem ipsum dolor sit amet jhduqgbj consectetur. Cursus ut amet eget
        neque tristique ornare morbi. Lacus penatibus varius proin viverra neque
        facilisis nunc volutpat purus. Ipsum quam eget proin diam aliquet. Sed
        eget cursus. jefh qfqi cnbskvwkjc wbi qijwidj yrfnjrhufr irfkmLorem
        ipsum dolor sit amet jhduqgbj consectetur. Cursus ut amet eget neque
        tristique ornare morbi. Lacus penatibus varius proin viverra neque
        facilisis nunc volutpat purus. Ipsum quam eget proin diam aliquet. Sed
        eget cursus. jefh qfqi cnbskvwkjc wbi qijwidj yrfnjrhufr irfkm
        jwqiqrciqcr ORJCorjovro lorem ips
      </div>
      <ProfileBackButton />
      <Navbar />
    </div>
  );
};

export default AboutUs;
