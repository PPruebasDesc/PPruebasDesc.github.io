
// js Imports
import {showRegister} from "./js/CtrlBotones"
import {showLogin} from "./js/CtrlBotones"
import {login} from "./js/CtrlBotones"
import {register} from "./js/CtrlBotones"

//import nodemailer
import {nodemailer} from "./js/CtrlBotones"


// Firebase imports
import { InitializelizeApp } from "firebase/app";
import { GoogleAuthProvideruth } from "firebase/auth";
import { } from "firebase/auth";








// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
 // Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

    // Import the functions you need from the SDKs you need
    import { signInWithPopupializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
    import { GoogleAuthProvideruthAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
    import { getFirestore } from "firebase/firestore";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
S
    const analytics = getAnalytics(app);