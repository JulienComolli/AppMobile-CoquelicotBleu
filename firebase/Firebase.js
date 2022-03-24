// Initialisation bdd
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push, get, child} from "firebase/database";
import { getStorage } from "firebase/storage"


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

const flowersKey = getAllFlowerKey()
console.log(flowersKey)
getAllFlower(flowersKey)

/** 
@return {Array<string>} Liste des ID des différentes fleurs
*/
async function getAllFlowerKey(){
  return await get(ref(data, 'Fleurs/'))
  .then((snapshot) => {
    return Object.keys(snapshot.val())
  })
  .catch((err) => {
    console.log(err);
    return null;
  })
}

/**
 * @param { Array<String> } flowersKey Liste des ID des différentes fleurs
 * @returns { Array<String> } Détails de toutes les fleurs.  
 */
async function getAllFlower(flowersKey){
  console.log(flowersKey)
  let listFlower = []
  flowersKey.forEach(key => {
     get(ref(data, 'Fleurs/' + key))
    .then((snapshot) => {
      listFlower.push({
        "name" : snapshot, 
        "description" : snapshot, 
        // "img": snapshot
      })
    })
    .catch(err);
  });
  // console.log(listFlower.len)
  return listFlower;
}

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
  if (name !== "") {
    await push(ref(data, '/Fleurs/'), {
      name: name,
      description: description,
      base64: img
    })
  }
}



