
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyC6dSoAhXdrT3Q44w4NAoqKwBCu2HPaNGg",
    authDomain: "shoptify-5913e.firebaseapp.com",
    projectId: "shoptify-5913e",
    storageBucket: "shoptify-5913e.appspot.com",
    messagingSenderId: "123888958385",
    appId: "1:123888958385:web:5b139d6f3eb8360595db90"
};



const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()


export { db, auth }