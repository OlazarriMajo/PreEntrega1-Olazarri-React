import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3N1hJHim7NoulgshgdApWSmtlxL8MAVc",
  authDomain: "pescalandia-b15ee.firebaseapp.com",
  projectId: "pescalandia-b15ee",
  storageBucket: "pescalandia-b15ee.appspot.com",
  messagingSenderId: "200341281800",
  appId: "1:200341281800:web:c0682ecf70cbe67cdd45bd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);