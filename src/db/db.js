import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDCRl2wQhyQEgAwzF2t0IOrm5CnHOhMCw4",
  authDomain: "ecommerce-49930-e7613.firebaseapp.com",
  projectId: "ecommerce-49930-e7613",
  storageBucket: "ecommerce-49930-e7613.appspot.com",
  messagingSenderId: "512078689344",
  appId: "1:512078689344:web:c82c87490fe5ecc0781ba5"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()

export default db