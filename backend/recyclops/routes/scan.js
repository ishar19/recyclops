import express from 'express'
const router = express.Router()
import firebaseApp from '../firebaseConfig.js'
import {arrayRemove, arrayUnion, doc ,getDoc, getFirestore,setDoc,Timestamp, updateDoc,addDoc, collection } from "firebase/firestore";
const db = getFirestore(firebaseApp);
import getImage from '../utils/getImage.js';
import uploadImage from '../utils/uploadImage.js';
import fetch from 'node-fetch';
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/newScan',async(req, res)=>{
    const {dataURI,userId=null} = req.body
    let publicURL;
    let scanClass;
    let scanId;
    try{
        const file = await getImage(dataURI)
        publicURL = await uploadImage(file)
        const response = await fetch(`https://ml.recyclops.limitnil.com/classify_image?image_url=${publicURL}`);
        const data = await response.json()
        scanClass = data['class_integer'].toString()
        const scanDataRef = doc(db, "scanData",data['class_integer'].toString())
        const scanSnap = await getDoc(scanDataRef)
        const scanInfo = scanSnap.data()
        const newScanRef = await addDoc(collection(db,"scans"),{
            publicURL:publicURL,
            scanClass:scanClass,
            userId:userId,
            createdAt:Timestamp.fromDate(new Date(Date.now()))
        })
        scanId = newScanRef.id
        res.send({scanInfo, scanId})
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})


router.get('/getData/:id', async(req, res)=>{
    const scanId = req.params.id
    try{
        const scanRef = doc(db,"scans",scanId)
        const scanSnap = await getDoc(scanRef)
        if(scanSnap.exists()){
            const scanInfo = scanSnap.data()
            const scanDataRef = doc(db, "scanData",scanInfo.scanClass)
            const scanDataSnap = await getDoc(scanDataRef)
            const scanData = scanDataSnap.data()
            res.json({scanInfo,scanData})
        }
        else{
            res.sendStatus(404)
        }
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})


export default router
