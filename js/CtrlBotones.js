function showLogin() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("register-section").style.display = "none";
  }
  
  function showRegister() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
  }
  function login() {
    // Aquí puedes agregar la lógica para realizar el inicio de sesión
    var usernameOrEmail = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Ejemplo de una función de validación básica
    if ((usernameOrEmail === "usuario" || usernameOrEmail === "correo@example.com") && password === "contraseña") {
      alert("Inicio de sesión exitoso");
      // Aquí puedes redirigir al usuario a la sección correspondiente
    } else {
      alert("Nombre de usuario o contraseña incorrectos");
    }
  }
  
  
  function register() {
    // Aquí puedes agregar la lógica para realizar el registro de usuario
    var regUsername = document.getElementById("reg-username").value;
    var email = document.getElementById("email").value;
    var regPassword = document.getElementById("reg-password").value;
    // Ejemplo de una función de registro básica
    if (regUsername && email && regPassword) {
      alert("Registro exitoso");
      // Aquí puedes redirigir al usuario a la sección correspondiente
    } else {
      alert("Por favor, complete todos los campos");
    }
  }

// Registrar perfil google
function registrargoogle() {

 
  }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // El usuario ya ha iniciado sesión, puedes redirigirlo o realizar otras acciones necesarias.
        var uid = user.uid;
        // ...
      } else {
        // El usuario no ha iniciado sesión, puedes continuar con el proceso de autenticación.
        // Aquí se debe implementar la lógica para la autenticación con Google.
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
          .then((result) => {
            // El usuario se ha autenticado correctamente con Google.
            var user = result.user;
            // Puedes realizar acciones adicionales aquí, como guardar datos del usuario en tu base de datos, etc.
            var successMessage = "Inicio de sesión exitoso con Google";
            console.log(successMessage);
            // Puedes redirigir al usuario o realizar otras acciones según el éxito de la autenticación.
          })
          .catch((error) => {
            // Ocurrió un error durante el proceso de autenticación con Google.
            var errorCode = error.code;
            var errorMessage = error.message;
            var errorMessage = "Error de autenticación con Google: " + errorMessage;
            console.log(errorMessage);
            // Puedes mostrar el mensaje de error al usuario o realizar otras acciones según el error de autenticación.
          });
      }
    });
  
  