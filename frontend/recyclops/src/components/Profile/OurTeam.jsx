import React from "react";
import Giri from "../../Assets/Giri.jpeg";
import Diksha from "../../Assets/Diksha.jpeg";
import Prabkirat from "../../Assets/Prabkirat.jpg";
import Ishar from "../../Assets/ishar.jpg";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const members = [
  {
    name: "Diksha Raj",
    img: Diksha,
    tech: "Design + Research",
    info: "A second year engineering student, I am a strategic and creative person. An underway developer who likes finding patterns and styles in everyday life. I have practiced as a UI-UX designer and am currently learning frontend and working on my problem solving skills.",
    github: "https://github.com/IamDikshaR ",
    twitter: "https://twitter.com/Diksha_R09 ",
    instagram: "https://instagram.com/diksha_r09",
  },
  {
    name: "Ishar Jain",
    img: Ishar,
    tech: "Full stack",
    info: "My friends call me 'javascript propagandist' and they are right. I am a full stack web engineer writing in react, tailwind and node by night and sophomore by day. When I'm not coding, I'm ranting about anything.",
    github: "https://github.com/ishar19",
    twitter: "https://twitter.com/ishartwt",
    instagram: "https://instagram.com/ij_473",
  },
  {
    name: "Prabhkirat Singh",
    img: Prabkirat,
    tech: "Backend + ML model",
    info: "I am a second-year BTech CSE student who loves building projects and constantly trying out new technologies. So far, I have worked on Android and iOS apps thanks to Flutter, as well as created Discord and Twitter bots using Python. Additionally, I have built basic APIs and machine learning models.",
    github: "",
    twitter: "https://twitter.com/pkiratsingh",
    instagram: "",
  },
  {
    name: "Bhavya Giri",
    img: Giri,
    tech: "Frontend + Documentation",
    info: "I am a sophomore engineering student exploring the field of Web Development and Data Science. I strongly believe in building projects and iterating is the way of learning. Right now, learning the ins and outs of Exploratory Data Analysis and various ML algorithms.",
    github: "https://github.com/bhavya-giri",
    twitter: "https://twitter.com/BhavyaGiri_",
    instagram: "https://www.instagram.com/bhavyagiri_/",
  },
];
const renderMembers = members.map((member, i) => (
  <div
    key={i}
    className="m-5  rounded-md bg-gray-300  bg-opacity-5 p-5 text-center font-dosis drop-shadow-lg backdrop-blur-lg"
  >
    <img
      src={member.img}
      alt={member.name}
      className="mx-auto h-40 w-40 rounded-full"
    />
    <h1 className="text-2xl font-semibold text-greenPrimary">{member.name}</h1>
    <h1 className="text-2xl font-normal">{member.tech}</h1>
    <div>{member.info}</div>
    <div className="mt-3 flex justify-around text-4xl text-greenPrimary">
      {member.github && (
        <a href={member.github} target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      )}
      {member.twitter && (
        <a href={member.twitter} target="_blank" rel="noreferrer">
          <AiOutlineTwitter />
        </a>
      )}
      {member.instagram && (
        <a href={member.instagram} target="_blank" rel="noreferrer">
          <AiOutlineInstagram />
        </a>
      )}
    </div>
  </div>
));
const OurTeam = () => {
  return (
    <>
      <div className="m-5 rounded-md bg-gray-300 bg-opacity-5 p-5 font-dosis  drop-shadow-lg backdrop-blur-lg">
        <h1 className="text-center text-3xl font-medium text-greenPrimary">
          Our Team
        </h1>
      </div>
      <div className="sm:flex md:flex-row lg:flex-row">{renderMembers}</div>
    </>
  );
};

export default OurTeam;
