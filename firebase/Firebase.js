// Initialisation bdd
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateEmail, updatePassword } from "firebase/auth";
import { getDatabase, ref, push, get, set, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDenDHAUfyMtQAz8YjarqiZt-rKgl4vr7Q",
  authDomain: "coquelicot-bleu-2.firebaseapp.com",
  databaseURL: "https://coquelicot-bleu-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "coquelicot-bleu-2",
  storageBucket: "coquelicot-bleu-2.appspot.com",
  messagingSenderId: "504930726835",
  appId: "1:504930726835:web:ab0d8b9c176c469a4a51c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const data = getDatabase(app);
const auth = getAuth(app);

/**
 * Connexion à l'application avec un email et un mot de passe
 * @param {string} email 
 * @param {string} password 
 * @returns Retourne la session de l'utilisateur
 */
export async function sign_in(email, password) {
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

/**
 * S'inscrire à l'aide d'un mot de passe et d'un email
 * @param {string} email 
 * @param {string} password 
 * @returns Retourne la session de l'utilisateur
 */
export async function sign_up(email, password) {
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

/**
 * Ajouter une fleur dans la BDD
 * @param {string} name Nom de la fleur
 * @param {string} description Description de la fleur
 * @param {string} img Img au format x64
 */
export async function add_flower(name, description, img) {
  if (name !== "") {
    await push(ref(data, '/Fleurs/'), {
      name: name,
      description: description,
      base64: img
    })
  }
}

export async function getAllFlowers() {
  let keys = await get(ref(data, 'Fleurs/'))
    .then((snapshot) => {
      return Object.keys(snapshot.val())
    })
    .catch((err) => {
      return null;
    })

  if (keys == null)
    return null;

  let listFlower = []

  for (let i = 0; i < keys.length; i++) {
    await get(ref(data, 'Fleurs/' + keys[i]))
      .then((snapshot) => {
        listFlower.push({
          "key": keys[i],
          "description": snapshot.val().description,
          "name": snapshot.val().name,
          "img": snapshot.val().base64
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  return listFlower;
}

/**
 * Met à jour l'ensemble des propriétés de l'utilisateurs
 * @param {string} user Variable d'identification de l'utilisateur
 * @param {string} email Nouvel email 
 * @param {string} password Nouveau mot de passe
 * @param {string} nom Nouveau nom
 * @param {string} prenom Nouveau prénom
 * @param {string} img Nouvel image de profil
 */
export async function updateProfil(user, email, password, nom, prenom, img) {
  /*await set(ref(data, "Utilisateurs/" + user.uid), {
    Nom: nom,
    Prenom: prenom,
    Img: img
  })
    .catch((err) => {
      console.log(err)
      return false;
    })*/
  if (user.email != email) {
    await updateEmail(auth.currentUser, email)
      .catch((err) => {
        console.log(err)
      })
  }

  if (password != "" || password != undefined || password != null) {
    await updatePassword(auth.currentUser, password)
      .catch((err) => {
        console.log(err)
        return false;
      })
  }
}

/**
 * Supprime la fleur indiquée
 * @param {String} key ID de la fleur
 */
export async function deleteFlower(key) {
  return await remove(ref(data, "Fleurs/" + key))
    .then(() => {
      return true;
    })
    .catch((err) => {
      console.log(err)
      return false;
    })
}

/**
 * Récupérer les propriétés de l'utilisateur
 * @param {String} key ID de l'utilisateur connecté
 * @returns 
 */
export async function getUser(key) {
  return await get(ref(data, "Utilisateurs/" + key))
    .then((user) => {
      return user.val();
    })
    .catch((err) => {
      return null;
    })
}

/**
 * Supprime l'utilisateur indiquée
 * @param {String} userUID UID de l'utilisateur
 */
export async function deleteUser(userUID) {
  return await remove(ref(data, "Utilisateurs/" + userUID))
    .then(() => {
      auth.currentUser.delete();
      return true;
    })
    .catch((err) => {
      console.log(err)
      return false;
    })
}

/**
 * Ajoute pour l'utilisateur la fleur indiquée en favori 
 * @param {String} key ID de la fleur
 * @param {String} userUID UID de l'utilisateur
 * @returns 
 */
export async function addFav (key, userUID) {
  return await push(ref(data, "Utilisateurs/" + user.uid + "/Favoris"), key)
  .then(() => {
    return true;
  })
  .catch((err) => {
    console.log(err)
    return false;
  })
}

/**
 * Obtenir la liste des favoris pour un utilisateur
 * @param {String} userUID UID de l'utilisateur
 */
export async function getFav (userUID) {
  await get(ref(data, "Utilisateurs/" + userUID + "/Favoris"))
  .then((snapshot) => {
    
      if (snapshot.val() == null)
        return null;
      
    keys = Object.keys(snapshot.val())
    fav = []
    for(let i = 0; i < keys.length; i++){
      get(ref(data, "Favori/" + keys[i]))
      .then((fleur) => {
        fav.push({
          "key": keys[i],
          "description": fleur.val().description,
          "name": fleur.val().name,
          "img": fleur.val().base64
        })
      })
    }
    return fav;
  })
  .catch((err) => {
    console.log(err)
    return null;
  })
}

/**
 * Mise à jour d'une fleur
 * @param {String} key ID de la fleur 
 * @param {String} name nouveau
 * @param {String} description nouvelle description
 * @param {String} img nouvelle img
 */
export async function update_flower (key, name, description, img) {
  if (name !== "") {
    await set(ref(data, '/Fleurs/' + key), {
      name: name,
      description: description,
      base64: img
    })
  }
}