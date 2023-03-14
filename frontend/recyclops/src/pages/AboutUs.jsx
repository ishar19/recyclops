import React from "react";
import Navbar from "../components/global/Navbar";
import ProfileBackButton from "../components/global/ProfileBackButton";
import { MdOutlineMenuBook } from "react-icons/md";
import AboutUsCard from "../components/Profile/AboutUsCards";
import OurTeam from "../components/Profile/OurTeam";

const AboutUs = () => {
  const cards = [
    {
      title: "What is Recycl0ps?",
      info: "A web application to help people recognize and segregate their wastes in a correct manner. We often are unaware of the correct disposal of waste that is found in an average household and in everyday life.  We are here to help every common man learn the dos and don’ts of waste disposal and create a better environment in the process.",
    },
    {
      title: "Why Recycl0ps?",
      info: "In today’s world, where technology and man power are at it’s peak use and every activity generates waste of some or the other kind, it becomes necessary to know the correct way of disposal of wastes to decrease environmental pollution and contamination. Since every change begins at home, in our everyday life, awareness among citizens about waste management would make our surroundings better by creating a safer and cleaner environment. Further it would help inculcate environment consciousness and also help promote a sustainable lifestyle.",
    },
  ];
  const renderCards = cards.map((card, i) => (
    <AboutUsCard key={i} title={card.title} info={card.info} />
  ));
  return (
    <div className="bg-aboutUs bg-fixed pb-16">
      <h1 className="flex items-center gap-1 p-5 font-dosis text-4xl font-bold text-greenPrimary">
        <MdOutlineMenuBook />
        About Us
      </h1>
      {renderCards}
      <OurTeam />
      <ProfileBackButton />

      <Navbar />
    </div>
  );
};

export default AboutUs;
