function loadRegisterForm() {
    const registerForm = `
      <h2>Register</h2>
      <form id="registerForm" onsubmit="registerUser(event)">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
  
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required>
  
        <input type="checkbox" id="toc" name="toc" required>
        <label for="toc">I agree to the Terms and Conditions</label>
  
        <button type="submit">Register</button>
      </form>
    `;
    document.querySelector('.content').innerHTML = registerForm;
  }
  
  function registerUser(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (!validateName(name) || !validateEmail(email) || !validatePassword(password, confirmPassword) || !validateToC()) {
      return;
    }
    saveUserDataToDatabase(name, email, password);
    alert('Registration successful!'); 
  }
  
  function validateName(name) {
    if (name.trim() === '') {
      alert('Name must be filled out');
      return false;
    }
    return true;
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email format');
      return false;
    }
    return true;
  }
  function validatePassword(password, confirmPassword) {
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
  
    return true;
  }
  function validateToC() {
    const tocCheckbox = document.getElementById('toc');
    if (!tocCheckbox.checked) {
      alert('Please agree to the Terms and Conditions');
      return false;
    }
    return true;
  }
  document.addEventListener('DOMContentLoaded', loadRegisterForm);
  