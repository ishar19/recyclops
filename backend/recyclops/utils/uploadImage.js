import firebaseApp from "../firebaseConfig.js";
import { getStorage, ref,uploadBytes, uploadString } from "firebase/storage";
import {readFileSync,unlink} from 'fs'
import admin from 'firebase-admin'
import serviceAccount from '../recyclops-69781-firebase-adminsdk-tqt5x-5f8d35fdbc.js';
const storage = getStorage(firebaseApp);
import { v4 as uuidv4 } from 'uuid';
import adminApp from "../firebaseAdminConfig.js";
import * as dotenv from 'dotenv' 
dotenv.config()
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET
// });
// var bucket = admin.storage().bucket();
var bucket = adminApp.storage().bucket()
const uploadImage = async(filePath,dataURI)=>{
    const metadata = {
    metadata: {
      // This line is very important. It's to create a download token.
      firebaseStorageDownloadTokens: uuidv4()
    },
    contentType: 'image/png',
    cacheControl: 'public, max-age=31536000',
  };

  // Uploads a local file to the bucket
  const {downloadToken,name} = await bucket.upload(filePath, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    metadata: metadata,
  }).then((res)=>{return {downloadToken:res[0]['metadata']['metadata']["firebaseStorageDownloadTokens"],name:res[0]['metadata']['name']}}).catch((e)=>{console.log(e)})
  const URL = downloadUrl(process.env.FIREBASE_STORAGE_BUCKET,name,downloadToken)
  unlink(filePath,()=>{
    console.log("file deleted",filePath)
  })
  return URL


}


const downloadUrl = (bucket, pathToFile, downloadToken) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(
    pathToFile
  )}?alt=media&token=${downloadToken}`;
};
export default uploadImage
