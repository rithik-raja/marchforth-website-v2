// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFznDQVlKhcgz5FMJOGnU4vqF3DXeeyVo",
  authDomain: "marchforth-data.firebaseapp.com",
  projectId: "marchforth-data",
  storageBucket: "marchforth-data.firebasestorage.app",
  messagingSenderId: "204087938247",
  appId: "1:204087938247:web:77276cba0892f25b24c2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export default firestore;
