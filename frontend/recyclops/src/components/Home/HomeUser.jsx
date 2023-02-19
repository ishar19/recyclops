import React, { useContext } from "react";
import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "../../Context/UserProvider";
import { AiOutlineGoogle } from "react-icons/ai";
import getUserJWT from "../../utils/getUserJWT";
const HomeUser = () => {
  const user = useContext(UserContext);
  if (getUserJWT() != null) {
    getUserJWT().then((token) => console.log(token));
  }
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {user ? (
        <div>
          <h1 className="text-3xl text-greenPrimary">Hi {user.displayName}</h1>
          <h2 className="text-2xl">Welcome Back!</h2>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          href="#"
          className="flex items-center gap-2 rounded-lg bg-greenPrimary px-5 py-3 text-2xl text-white"
        >
          <AiOutlineGoogle />
          Sign in
        </button>
      )}
    </div>
  );
};

export default HomeUser;
