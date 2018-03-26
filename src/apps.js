(function() {

  const config = {
    apiKey: "AIzaSyBLyNUDx3pfSxc3Hm0tu_7WPH_B_sbuk4w",
    authDomain: "focused-ae183.firebaseapp.com",
    databaseURL: "https://focused-ae183.firebaseio.com",
    storageBucket: "focused-ae183.appspot.com",
  };
  firebase.initializeApp(config);

// obtener Elementos

const txtEmail = document.getElementById ('txtEmail');
const txtPassword = document.getElementById ('txtPassword');
const btnLogin = document.getElementById ('btnLogin');
const btnSignUp = document.getElementById ('btnSignUp');
const btnLogout = document.getElementById ('btnLogout');

//eventos Login

btnLogin.addEvenetListener('click' , e =>{
  //Obtener email y password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  // Sign in
  const promise = auth.signInWithEmailAndPassword (email, pass);
  promise.catch(e => console.log(e.message));
});


}());
