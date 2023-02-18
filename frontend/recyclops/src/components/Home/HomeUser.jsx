import React, { useContext, useEffect, useState } from "react";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "../../Context/UserProvider";
import { AiOutlineGoogle } from "react-icons/ai";
const HomeUser = () => {
  // const isLoggedIn = false
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = useContext(UserContext);
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1 className="text-3xl text-greenPrimary">Hi {user.displayName}</h1>
          <h2 className="text-2xl">Welcome Back!</h2>
        </div>
      ) : (
        <a
          onClick={handleSignIn}
          href="#"
          className="rounded-lg bg-greenPrimary px-5 py-3 text-2xl text-white"
        >
          <AiOutlineGoogle />
          Sign in
        </a>
      )}
    </div>
  );
};

{
  /* use a button */
}

export default HomeUser;
