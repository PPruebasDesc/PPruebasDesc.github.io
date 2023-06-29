// JS Imports
import { showRegister, showLogin, login, register, google, GoogleAuthProvider } from "./js/CtrlBotones";

// Import nodemailer
import{sendMail,nodemailer,}  from "nodemailer";



// TODO: Reemplaza la siguiente configuración con la configuración de tu proyecto Firebase

  // Tu configuración de Firebase aquí
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTdKRahhF220DwFH4RVWmpFxs0WjJ8rbA",
  authDomain: "pruebasconfig-c2268.firebaseapp.com",
  databaseURL: "https://pruebasconfig-c2268-default-rtdb.firebaseio.com",
  projectId: "pruebasconfig-c2268",
  storageBucket: "pruebasconfig-c2268.appspot.com",
  messagingSenderId: "161895581783",
  appId: "1:161895581783:web:aee7fe1d1b90a1ae047b12",
  measurementId: "G-P4H2FNEPQ1"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación de Firebase y obtén una referencia al servicio
const auth = getAuth(app);


// Firebase imports
// Importa las funciones necesarias de los SDK que necesites
import { signInWithPopup } from "firebase/auth";
import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const analytics = getAnalytics(app);
