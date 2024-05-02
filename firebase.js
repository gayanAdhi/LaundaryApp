
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiNo9vxmfDUmONFL1-gFHTlSDRK3TwEws",
  authDomain: "laundry-application-8208b.firebaseapp.com",
  projectId: "laundry-application-8208b",
  storageBucket: "laundry-application-8208b.appspot.com",
  messagingSenderId: "593059372289",
  appId: "1:593059372289:web:961fdf750f0f3b1caf4f00"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};