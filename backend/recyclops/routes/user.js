import express from "express";
const router = express.Router();
import firebaseApp from "../firebaseConfig.js";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  Timestamp,
} from "firebase/firestore";
const db = getFirestore(firebaseApp);
import verifyUserToken from "../utils/validUser.js";
// router.use(async(req, res, next) => {
//   const token = req.headers['bearer']
//   const verification =await verifyUserToken(token)
//   if(!verification){
//     res.sendStatus(403)
//     console.log("invalid token")
//   }
//   else{
//     next()
//   }
// })

router.get("/basicInfo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const { id, email, createdAt } = userSnap.data();
      const response = { id: id, email: email, createdAt: createdAt };
      res.json(response);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/newUser", async (req, res) => {
  const { email, id } = req.body;
  console.log("request");
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      res.sendStatus(200);
      return;
    } else {
      try {
        await setDoc(
          doc(db, "users", id),
          {
            email: email,
            id: id,
            createdAt: Timestamp.fromDate(new Date(Date.now())),
          },
          { merge: true }
        ).then(() => {
          res.sendStatus(200);
        });
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/saveScan", async (req, res) => {
  const { userId, scanId } = req.body;
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        savedScan: arrayUnion(scanId),
      },
      { merge: true }
    ).then(() => res.sendStatus(200));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/removeScan", async (req, res) => {
  const { userId, scanId } = req.body;
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        savedScan: arrayRemove(scanId),
      },
      { merge: true }
    ).then(() => res.sendStatus(200));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/addScan", async (req, res) => {
  const { userId, scanId } = req.body;
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        scanHistory: arrayUnion(scanId),
      },
      { merge: true }
    ).then(() => res.sendStatus(200));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/saveArticle", async (req, res) => {
  const { userId, articleId } = req.body;
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        savedArticle: arrayUnion(articleId),
      },
      { merge: true }
    ).then(() => res.sendStatus(200));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/readingHistory", async (req, res) => {
  const { userId, articleId } = req.body;
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        articleHistory: arrayUnion(articleId),
      },
      { merge: true }
    ).then(() => res.sendStatus(200));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/removeArticle", async (req, res) => {
  const { userId, articleId } = req.body;
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(
      userRef,
      {
        savedArticle: arrayRemove(articleId),
      },
      { merge: true }
    ).then(() => res.sendStatus(200));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/savedArticle/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const response = userSnap.data();
      res.json(response.savedArticle);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/readingHistory/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const response = userSnap.data();
      res.json(response.articleHistory);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/savedScan/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const response = userSnap.data();
      res.json(response.savedScan);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/scanHistory/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userRef = doc(db, "users", id);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const response = userSnap.data();
      res.json(response.scanHistory);
      console.log(response.scanHistory);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
