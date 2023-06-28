function showLogin() {
  document.getElementById("login-section").style.display = "block";
  document.getElementById("register-section").style.display = "none";
}

function showRegister() {
  document.getElementById("login-section").style.display = "none";
  document.getElementById("register-section").style.display = "block";
}

function register() {
  var regUsername = document.getElementById("reg-username").value;
  var email = document.getElementById("email").value;
  var regPassword = document.getElementById("reg-password").value;
  
  if (regUsername && email && regPassword) {
    alert("Registro exitoso");
  } else {
    alert("Por favor, complete todos los campos");
  }
}

function login() {
  var usernameOrEmail = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if ((usernameOrEmail === "usuario" || usernameOrEmail === "correo@example.com") && password === "contraseña") {
    alert("Inicio de sesión exitoso");
  } else {
    alert("Nombre de usuario o contraseña incorrectos");
  }
}

function google() {
  var provider = new firebase.auth.GoogleAuthProvider();
  
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      var successMessage = "Inicio de sesión exitoso con Google";
      console.log(successMessage);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = "Error de autenticación con Google: " + error.message;
      console.log(errorMessage);
    });
}

document.getElementById("login-button").addEventListener("click", showLogin);
document.getElementById("register-button").addEventListener("click", showRegister);
document.getElementById("login-submit-button").addEventListener("click", login);
document.getElementById("register-submit-button").addEventListener("click", register);
document.getElementById("google-button").addEventListener("click", google);
