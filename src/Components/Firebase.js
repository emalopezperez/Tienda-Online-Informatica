import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCml1XGgtuDjm-HvocbTulrM7ggVAvzR5c",
  authDomain: "reactcoder-dd9ac.firebaseapp.com",
  projectId: "reactcoder-dd9ac",
  storageBucket: "reactcoder-dd9ac.appspot.com",
  messagingSenderId: "719111811794",
  appId: "1:719111811794:web:3402ed98ea88b222eb730b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
