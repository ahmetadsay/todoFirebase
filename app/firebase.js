import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbYzHq_GGmmFqNN62n9DaReFfS6O_h1jk",
  authDomain: "todo-list-65a8d.firebaseapp.com",
  projectId: "todo-list-65a8d",
  storageBucket: "todo-list-65a8d.appspot.com",
  messagingSenderId: "240289406124",
  appId: "1:240289406124:web:c49e0fd5c15f176ac05309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)