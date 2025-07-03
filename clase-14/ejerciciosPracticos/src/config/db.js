import {config} from 'dotenv'
config()

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:  process.env.APIKEY,
    authDomain:  process.env.AUTHDOMAIN,
    projectId:  process.env.PROJECTID,
    storageBucket:  process.env.STORAGEBUCKET,
    messagingSenderId:  process.env.MESSAGINGSENDERID,
    appId:  process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }