import React, { useContext } from "react";
import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "../../Context/UserProvider";
import { AiOutlineGoogle } from "react-icons/ai";

import { newUser } from "../../APIs/User";

// import getUserJWT from "../../utils/getUserJWT";
const HomeUser = () => {
  const user = useContext(UserContext);
  //   if (getUserJWT() != null) {
  //     getUserJWT().then((token) => console.log(token));
  //   }
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(async (data) => {
        // console.log(data);
        newUser(data.user.uid, data.user.email);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      {user ? (
        <div>
          <h1 className="font-dosis text-3xl font-medium text-greenPrimary">
            Hi {user.displayName}
          </h1>
          <h2 className="font-dosis text-2xl font-normal">Welcome Back!</h2>
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          href="#"
          className="flex items-center gap-2 rounded-lg bg-greenPrimary px-5 py-3 font-dosis text-2xl font-normal text-white"
        >
          <AiOutlineGoogle />
          Sign in
        </button>
      )}
    </div>
  );
};

export default HomeUser;
