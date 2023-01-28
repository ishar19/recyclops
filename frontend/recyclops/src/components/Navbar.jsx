import React from "react";
import {
  MdOutlineHome,
  MdOutlineDocumentScanner,
  MdVideogameAsset,
  MdPerson,
} from "react-icons/md";
const Navbar = () => {
  const navbar = [
    { icon: <MdOutlineHome size="32px" />, title: "Home" },
    { icon: <MdOutlineDocumentScanner size="32px" />, title: "Scanner" },
    {
      icon: <MdVideogameAsset size="32px" />,
      title: "Gaming",
    },
    {
      icon: <MdPerson size="32px" />,
      title: "Profile",
    },
  ];
  return (
    <div className="fixed bottom-0 flex h-16 w-full items-center justify-around bg-[#F0F0F0]">
      {navbar.map((item, i) => (
        <div
          key={i}
          className="flex cursor-pointer flex-col items-center justify-center"
        >
          {item.icon}
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
