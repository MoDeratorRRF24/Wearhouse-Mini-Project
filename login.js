function loadLoginForm() {
    const loginForm = `
      <h2>Login</h2>
      <form id="loginForm" onsubmit="loginUser(event)">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
  
        <label for="rememberMe">Remember Me:</label>
        <input type="checkbox" id="rememberMe" name="rememberMe">
  
        <button type="submit">Login</button>
        <p><a href="#">Forgot Password?</a></p>
      </form>
    `;
    document.querySelector('.content').innerHTML = loginForm;
  }
  
  function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validate and send login data to the server
    // ...
  
    alert(`Login successful!\nEmail: ${email}`);
    localStorage.setItem('loggedInUser', email);
    window.location.href = 'index.html';
  }
  document.addEventListener('DOMContentLoaded', loadLoginForm);
  