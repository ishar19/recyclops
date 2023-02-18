import express from 'express'
const router = express.Router()
import firebaseApp from '../firebaseConfig.js'
import {arrayRemove, arrayUnion, doc ,getDoc, getFirestore,setDoc,Timestamp } from "firebase/firestore";
const db = getFirestore(firebaseApp);
import getImage from '../utils/getImage.js';
import uploadImage from '../utils/uploadImage.js';
import fetch from 'node-fetch';
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/newScan',async(req, res)=>{
    const {dataURI} = req.body
    const file = await getImage(dataURI)
    const publicURL = await uploadImage(file)
    const response = await fetch(`https://fastapi-production-0f75.up.railway.app/classify_image?image_url=${publicURL}`);
    const data = await response.json();
    console.log(data);
    res.send(publicURL)
})

export default router
