import admin from 'firebase-admin'
import serviceAccount from './recyclops-69781-firebase-adminsdk-tqt5x-5f8d35fdbc.js';
const adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId:process.env.FIREBASE_PROJECT_ID,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    storageBucket:process.env.FIREBASE_STORAGE_BUCKET
});

export default adminApp