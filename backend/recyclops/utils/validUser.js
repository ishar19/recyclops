import { getAuth } from 'firebase-admin/auth'; 
import firebaseApp from '../firebaseConfig.js';
import admin from 'firebase-admin'
import serviceAccount from '../recyclops-69781-firebase-adminsdk-tqt5x-5f8d35fdbc.js';
// const adminApp = admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     projectId:process.env.FIREBASE_PROJECT_ID,
//     databaseURL:process.env.FIREBASE_DATABASE_URL
// });
import adminApp from '../firebaseAdminConfig.js';
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFlYjMxMjdiMjRjZTg2MDJjODEyNDUxZThmZTczZDU4MjkyMDg4N2MiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSXNoYXIgSmFpbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BRWRGVHA3cU9SZVBOWXFDd3dJb1h5cnNSWXJKMzNiUTNXd0F5akd2b0lqaVlnPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3JlY3ljbG9wcy02OTc4MSIsImF1ZCI6InJlY3ljbG9wcy02OTc4MSIsImF1dGhfdGltZSI6MTY3Njc1ODMxNSwidXNlcl9pZCI6IjVXWEp0UDdiTjRndGJQV0xkY0xSU1ZzWVFsdDIiLCJzdWIiOiI1V1hKdFA3Yk40Z3RiUFdMZGNMUlNWc1lRbHQyIiwiaWF0IjoxNjc2NzU4MzE2LCJleHAiOjE2NzY3NjE5MTYsImVtYWlsIjoiaXNoYXJqYWluMTlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTQ2OTU3NDc2NjAxNzM3NzkyMjYiXSwiZW1haWwiOlsiaXNoYXJqYWluMTlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.vbaOE-w6J0zKH0kw00ajgiHuEjmZir65JnIUpnoTcwWjRoIOaQjYlkZdBSLyiw33kLt2gm7nq_KhUM9BEYPXte6xVp_1iWXrbrd6xbYwKHe0spTp0g9QSQyKzZAS_acpBhcL-MPMcSe0ozLVKV6mpD4EArj6aqz33nMQh0NxIYGA8k6IljwsZlg8C0UsJf4BUZ0xA8gPXgvX5jYbaEWkYp5jSdV_hgaNGQE6EG22hYK_w4Kk_oPc_bzWBuj1LFzPpIK0kyJDuoaWM18oJHA_9nrIjKHWdw1dUKx9pHE3lFwKgkEDb1Prv4KY7ycyUb5z8c7TmpVWTp5NqorXV1XKHw"
// idToken comes from the client app
const verifyUserToken = (token)=>{
return adminApp.auth()
  .verifyIdToken(token)
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    // ...
    console.log(uid)
    return(1)
  })
  .catch((error) => {
    // Handle error
    return (0)
  });
}



export default verifyUserToken


