import React from "react";
import {
  MdOutlineHome,
  MdOutlineDocumentScanner,
  MdVideogameAsset,
  MdPerson,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const path = window.location.pathname;

  const navbar = [
    { icon: <MdOutlineHome size="32px" />, title: "Home", link: "/" },
    {
      icon: <MdOutlineDocumentScanner size="32px" />,
      title: "Scanner",
      link: "/scanner",
    },
    {
      icon: <MdVideogameAsset size="32px" />,
      title: "Game",
      link: "/game",
    },
    {
      icon: <MdPerson size="32px" />,
      title: "Profile",
      link: "/profile",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-around bg-[#D4D4D8]">
      {navbar.map((item, i) => (
        <Link key={i} to={item.link}>
          {path === item.link ? (
            <div
              className={` flex cursor-pointer flex-col items-center justify-center text-greenPrimary`}
            >
              {item.icon}
              <p>{item.title}</p>{" "}
            </div>
          ) : (
            <div
              className={`flex cursor-pointer flex-col items-center justify-center`}
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
