// inicio del codigo de index
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
	document.addEventListener("backbutton", onBackKeyDown, false);
}
function onBackKeyDown() {
    // swal('Retornar');
    // return false;
    $window.history.back();
};
// Si no tiene puntos que los ponga
if (!localStorage.puntosiniciales){
    localStorage.puntosiniciales = 100;
    swal("Has obtenido 100 puntos!", "Registrate para ponerlos en tu cuenta.", "success");
    };

  var config = {
    apiKey: "AIzaSyCgIzFEhJoqir3pf89vaFDlzUk3iCRLk3k",
    authDomain: "inzone-8f486.firebaseapp.com",
    databaseURL: "https://inzone-8f486.firebaseio.com",
    projectId: "inzone-8f486",
    storageBucket: "inzone-8f486.appspot.com",
    messagingSenderId: "348434125851",
    appId: "1:348434125851:web:dc47b1971d453cf39954be"
  };
  firebase.initializeApp(config);

if(localStorage.PuntosUsuario <= 0) {
  $.ajax({
    method: "PUT",
    url: "https://inzone.com.mx/api.php/usuarios/"+usuarioID,
    data: {puntos:15}
  }).done(function( msg ) {});
};
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    
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