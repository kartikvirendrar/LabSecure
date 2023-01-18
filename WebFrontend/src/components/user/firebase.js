import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEcSMIoC6FoSUXa6ZBUvTour3V3whEdrg",
  authDomain: "taskswebsitekvr.firebaseapp.com",
  projectId: "taskswebsitekvr",
  storageBucket: "taskswebsitekvr.appspot.com",
  messagingSenderId: "56413903921",
  appId: "1:56413903921:web:a06037172261683eb78910"
};

  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app);
  export const googleAuthProvider=new GoogleAuthProvider();