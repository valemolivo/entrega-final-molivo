import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAPMQZFb0gA_K1zLQI2wUNMWJXjHTkETrc",
    authDomain: "adoptanocompres-d5846.firebaseapp.com",
    projectId: "adoptanocompres-d5846",
    storageBucket: "adoptanocompres-d5846.appspot.com",
    messagingSenderId: "955777509700",
    appId: "1:955777509700:web:942c0b0676fc2b2d46cf11"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);