// Initialisation bdd
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database";
import { getStorage, uploadBytes } from "firebase/storage"

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
const storage = getStorage(app);

// async function getExistingFlower() {
//   await get(child(ref(data), 'Fleurs/')) //Obtenir toutes les fleurs enregistrées
//   .then((snapshot) => {
//     var liste_ID = Object.keys(snapshot.val())
//      liste_ID.forEach(fleurID =>  {
//       get(child(ref(data), 'Fleurs/' + fleurID + '/name')) //Obtenir le nom de la fleur
//       .then((snapshot2) => {
//         console.log(snapshot2)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//     });

//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }


export async function sign_in (email, password) {
    if (email !== "" && password !== "") {
      return await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        return res.user;
      })
      .catch(() => {
        return null;
      })
    }
  }

export async function sign_up(email, password){
  if (email !== "" && password !== "") {
    return await createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      return res.user;
    })
    .catch(() => {
      return null;
    })
  }
}

export async function add_flower(name, description, img) {
  console.log(img)
  if (name !== "") {
    await push(ref(data, '/Fleurs/'), {
      name: name,
      description: description,
    })
    await uploadBytes(ref(storage, '/Fleurs/'+ name + '.png'), img)
  }
}



