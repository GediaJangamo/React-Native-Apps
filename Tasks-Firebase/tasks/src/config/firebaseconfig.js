import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0Kg_kRleiKROGBmgzPMLN4vi7vR8aC-E",
  authDomain: "task-4568e.firebaseapp.com",
  projectId: "task-4568e",
  storageBucket: "task-4568e.appspot.com",
  messagingSenderId: "504701088836",
  appId: "1:504701088836:web:8c620e055b7c71d7b4f811"
};
  // Inicializacao do aplicactivo e configuracao da base de dados firestore

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore()

export default database