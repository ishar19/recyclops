import { auth } from "../firebaseConfig";

export const getUserJWT = () => {
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
        console.log(error);
      });
  }
  return JWT;
};

export const getUserId = () => {
  if (auth.currentUser == null) {
    return null;
  } else {
    return auth.currentUser.uid;
  }
};
