document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'admin' && password === 'password123') {
      alert('Inicio de sesión exitoso');
      document.getElementById('upload-section').style.display = 'block';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
  
  document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const file = document.getElementById('file-upload').files[0];
    if (file) {
      alert(`Subiendo: ${file.name}`);
    } else {
      alert('Por favor selecciona un archivo.');
    }
  });
  