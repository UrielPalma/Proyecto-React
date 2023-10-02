// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmhaGWYHmRT8tifliCb3gWnNWpiOFejhI",
  authDomain: "tienda-react-coder.firebaseapp.com",
  projectId: "tienda-react-coder",
  storageBucket: "tienda-react-coder.appspot.com",
  messagingSenderId: "659486208595",
  appId: "1:659486208595:web:af22b135c113cdb3750ca6"
};

// Initialize Firebase}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
