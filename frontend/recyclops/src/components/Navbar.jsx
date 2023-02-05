import React from "react";
import {
  MdOutlineHome,
  MdOutlineDocumentScanner,
  MdVideogameAsset,
  MdPerson,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navbar = [
    { icon: <MdOutlineHome size="32px" />, title: "Home", link: "/" },
    {
      icon: <MdOutlineDocumentScanner size="32px" />,
      title: "Scanner",
      link: "/scanner",
    },
    {
      icon: <MdVideogameAsset size="32px" />,
      title: "Gaming",
      link: "/gaming",
    },
    {
      icon: <MdPerson size="32px" />,
      title: "Profile",
      link: "/profile",
    },
  ];
  return (
    <div className="fixed bottom-0 flex h-16 w-full items-center justify-around bg-[#F0F0F0]">
      {navbar.map((item, i) => (
        <Link key={i} to={item.link}>
          <div className="flex cursor-pointer flex-col items-center justify-center">
            {item.icon}
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
