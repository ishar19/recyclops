import express from 'express'
const router = express.Router()
import firebaseApp from '../firebaseConfig.js'
import {arrayRemove, arrayUnion, doc ,getDoc, getFirestore,setDoc,Timestamp } from "firebase/firestore";
const db = getFirestore(firebaseApp);
import getImage from '../utils/getImage.js';
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/newScan',async(req, res)=>{
    const {dataURI} = req.body
    const filePath = getImage(dataURI)
    filePath.then((file)=>{res.json(file)})
    // res.json(dataURI)
})

export default router
