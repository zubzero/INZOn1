// inicio del codigo de index
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    swal('Retornar');
    return false;
    $window.history.back();
};
// Si no tiene puntos que los ponga
if (!localStorage.puntosiniciales){
    localStorage.puntosiniciales = 100;
    swal("Has obtenido 100 puntos!", "Registrate para ponerlos en tu cuenta.", "success");
    };

  var config = {
    apiKey: "AIzaSyAe2wjpSIwXHJwuXQUMKGCqJwGlT3fyE60",
    authDomain: "inzone-cef47.firebaseapp.com",
    databaseURL: "https://inzone-cef47.firebaseio.com",
    projectId: "inzone-cef47",
    storageBucket: "inzone-cef47.appspot.com",
    messagingSenderId: "686520181991",
    appId: "1:686520181991:web:3a93163f3632b261"
  };
  firebase.initializeApp(config);

if(localStorage.PuntosUsuario <= 0) {
  $.ajax({
    method: "PUT",
    url: "http://inzone.com.mx/api.php/usuarios/"+usuarioID,
    data: {puntos:15}
  }).done(function( msg ) {});
};
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    user.providerData.forEach(function (profile) {
    // console.log("Sign-in provider: "+profile.providerId);
    // console.log("  Provider-specific UID: "+profile.uid);
    // console.log("  Name: "+profile.displayName);
    // console.log("  Email: "+profile.email);
    // console.log("  Photo URL: "+profile.photoURL);
  });
  } else {
    // No user is signed in.
  }
});
//función para limpiar los campos
function LimpiarCampos(){
  document.registro.nombre.value="";
  document.registro.apellido.value="";
  document.registro.nacimiento.value="";
  document.registro.email.value="";
  document.registro.contrasena.value="";
  document.registro.nombre.focus();
}
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition();
    } else {
        alert('No podemos acceder a tu ubicación, checa que tengas activada la geolocalización.');
    };