import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
  doc,
  setDoc,
} from "firebase/firestore";
import "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDSU4l9EC9dU2kzWHVismS7BqM4ReSbSpI",
  authDomain: "react-todo-app-31d91.firebaseapp.com",
  databaseURL: "https://react-todo-app-31d91-default-rtdb.firebaseio.com",
  projectId: "react-todo-app-31d91",
  storageBucket: "react-todo-app-31d91.appspot.com",
  messagingSenderId: "308826911811",
  appId: "1:308826911811:web:daa92d84819e5754ce10f6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async (res) => {
        // await addDoc(collection(db, "user"), { email, password });
        const ref = doc(db, "user", res.user.uid);
        const docref = await setDoc(ref, { email, password });
      }
    );
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//signin with google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log("result:dddddddd ", result);
      const { displayName, email, uid } = result.user;
      const userRef = doc(db, "user", uid);
      await setDoc(userRef, { displayName, email, uid });
      console.log("User data saved successfully!");
    })
    .catch((error) => console.logO(error));
};
