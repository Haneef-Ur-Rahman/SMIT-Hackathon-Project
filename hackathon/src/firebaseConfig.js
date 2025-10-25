import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTe-TBMS3_d4OUGM1a7pHjmA-MI3_7fCQ",
  authDomain: "fir-database1-debbe.firebaseapp.com",
  projectId: "fir-database1-debbe",
  storageBucket: "fir-database1-debbe.appspot.com",
  messagingSenderId: "264234625926",
  appId: "1:264234625926:web:909e320912bc5755ef1a07",
  measurementId: "G-GBLYL82VX8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
