import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAnadPvjn5qU-4KwM22Qbsm2Y7N_CGFGHM",
  authDomain: "recyclops-69781.firebaseapp.com",
  projectId: "recyclops-69781",
  storageBucket: "recyclops-69781.appspot.com",
  messagingSenderId: "586991171058",
  appId: "1:586991171058:web:7468b694c56ce4a85aa76b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
