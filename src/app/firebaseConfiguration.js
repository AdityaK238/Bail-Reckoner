import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBDs0TdwYEjdrjsCUkSo3_ZCo-zdfKH-O8",
  authDomain: "bail-reckoner-48e77.firebaseapp.com",
  projectId: "bail-reckoner-48e77",
  storageBucket: "bail-reckoner-48e77.appspot.com",
  messagingSenderId: "226344994078",
  appId: "1:226344994078:web:af754ebe75450d3d01f50f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
