import * as dotenv from 'dotenv' 
dotenv.config()
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_API_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:process.env.FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp