// JS Imports
import { showRegister, showLogin, login, register, google, GoogleAuthProvider } from "./js/CtrlBotones";

// Import nodemailer
import{sendMail,nodemailer,}  from "nodemailer";

// Firebase imports
import { initializeApp} from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Reemplaza la siguiente configuración con la configuración de tu proyecto Firebase
const firebaseConfig = {
  // Tu configuración de Firebase aquí
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación de Firebase y obtén una referencia al servicio
const auth = getAuth(app);

// Importa las funciones necesarias de los SDK que necesites
import { signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const analytics = getAnalytics(app);
