import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCe5LCpRnKIS6bbLwl7VmB9tTwBUnzxfME",
    authDomain: "test-3b8f6.firebaseapp.com",
    projectId: "test-3b8f6",
    storageBucket: "test-3b8f6.firebasestorage.app",
    messagingSenderId: "314011609100",
    appId: "1:314011609100:web:21fe0f795a60042cafa629",
    measurementId: "G-CK08KCKV77"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
