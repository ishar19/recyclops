import { auth } from "../firebaseConfig";

const getUserJWT = () => {
  let JWT;
  if (auth.currentUser == null) {
    return null;
  } else {
    JWT = auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        // ...
        return idToken;
      })
      .catch(function (error) {
        // Handle error
      });
  }

  return JWT;
};

export default getUserJWT;
