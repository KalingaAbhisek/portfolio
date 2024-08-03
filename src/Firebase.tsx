import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDNZEz7_fKihjPOnHRgbWxtbtmCMcdS5aA",
  authDomain: "kalinga-portfolio.firebaseapp.com",
  projectId: "kalinga-portfolio",
  storageBucket: "kalinga-portfolio.appspot.com",
  messagingSenderId: "544162714950",
  appId: "1:544162714950:web:bb40541f5164e3240e4147",
  measurementId: "G-JLNXJH0MVJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);