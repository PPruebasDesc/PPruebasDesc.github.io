
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

  