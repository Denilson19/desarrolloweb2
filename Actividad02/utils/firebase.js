/*
Descripcion: Proyecto
Desarollador: Denilson Noel Ledezma Condori
Fecha: 2024-04-24
Cambios: NInguno
*/ 

var firebaseConfig = {
    apiKey: "AIzaSyBxPmQHvBfe9bo7HAj85tywiLsd8i_v1ys",
    authDomain: "autorizacion-a0566.firebaseapp.com",
    projectId: "autorizacion-a0566",
    storageBucket: "autorizacion-a0566.appspot.com",
    messagingSenderId: "984035048623",
    appId: "1:984035048623:web:0b28b4bb328f58f3b8e85a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); 
  const auth = firebase.auth();
