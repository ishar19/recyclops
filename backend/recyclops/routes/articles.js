import express from 'express'
const router = express.Router()
import firebaseApp from '../firebaseConfig.js'
import {arrayRemove, arrayUnion, doc ,getDoc, getFirestore,setDoc,Timestamp, updateDoc,addDoc, collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
const db = getFirestore(firebaseApp);

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/getArticles',async(req, res)=>{
    const articleData=[]
    try{
        const snapshot = await getDocs(collection(db,"articles"));
        snapshot.forEach(doc => {
            articleData.push({data:doc.data(),id:doc.id})
        // console.log(doc.id, '=>', doc.data());
        });
        res.json(articleData)
    }
    catch(e){
        console.log(e)
        res.sendStatus(500)
    }
})


export default router