// Initialisation bdd
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD9x7oMMZEA0tOV5ACHus04TgmYkQV1SWs",
  authDomain: "coquelicot-bleu.firebaseapp.com",
  databaseURL: "https://coquelicot-bleu-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coquelicot-bleu",
  storageBucket: "coquelicot-bleu.appspot.com",
  messagingSenderId: "459346027100",
  appId: "1:459346027100:web:f4880dcd4d66302d58fc99",
  measurementId: "G-D3NLEFB5V9"
};

const app = initializeApp(firebaseConfig);

const data = getDatabase(app);
const auth = getAuth(app);

export async function sign_in (email, password) {
    if (email !== "" && password !== "") {
      return await signInWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        return usr;
      })
      .catch(() => {
        return null;
      })
    }
  }

export function sign_up(email, password){
  if (email !== "" && password !== "")
  createUserWithEmailAndPassword(auth, email, password)
  .then((usr) => {console.log(usr.user.uid)})
  .catch(() => {console.log("Erreur inscription")})
}

