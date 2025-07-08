// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMw0G4-9NdmJ7accvHs_vsO4IKfmnSwtc",
  authDomain: "blogging-app-86473.firebaseapp.com",
  projectId: "blogging-app-86473",
  storageBucket: "blogging-app-86473.firebasestorage.app",
  messagingSenderId: "1042520720769",
  appId: "1:1042520720769:web:ea3276beefb77117ec5480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
export const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */