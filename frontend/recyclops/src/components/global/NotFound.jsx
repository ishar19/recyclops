import React from "react";
import Image from "../../Assets/404.png";
const NotFound = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center p-5">
      <div>
        <p className="font-dosis text-2xl font-bold">
          404 That&apos;s an error
        </p>
        <p className="font-dosis text-xl font-normal">
          The requested URL was not found on the server
        </p>
        <img src={Image} className="float-left mt-4 h-[60%]" />
      </div>
    </div>
  );
};

export default NotFound;
