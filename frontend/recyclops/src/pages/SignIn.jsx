import React, { useEffect } from "react";
import logo from "../Assets/Logo.png";
import { AiOutlineGoogle } from "react-icons/ai";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
const title = "RecyclOps | Sign In";
const SignIn = () => {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {})
      .catch((error) => {});
  };
  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <div className="h-screen p-10">
      <div className="mb-10 mt-10 flex h-4/5 flex-col items-center rounded-md border-2 border-greenPrimary bg-[#F0F0F0] text-center">
        <img src={logo} alt="logo" />
        <button
          onClick={handleSignIn}
          href="#"
          className="flex items-center gap-2 rounded-lg bg-greenPrimary px-10 py-3 font-dosis text-2xl font-medium text-white"
        >
          <AiOutlineGoogle />
          Sign in
        </button>
        <div className="mt-12 p-5 font-dosis font-medium">
          Lorem ipsum dolor sit amet consectetur. Nunc sed mi blandit vitae eget
          vitae. In egestas quis.
        </div>
      </div>

      <Link
        to="/"
        className="text-whi absolute right-10 rounded-md bg-greenPrimary px-5 py-2 font-dosis font-medium text-white shadow-md"
      >
        Skip
      </Link>
    </div>
  );
};

export default SignIn;
