function openSocialMedia(url) {
    window.open(url, '_blank');
  }
  
  // Additional JavaScript for handling user authentication and dynamic content loading
  // ...
  
  // Example: Show user-specific navigation after login
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    document.getElementById('loginNav').innerHTML = `<a href="#">${loggedInUser}</a>
                                                    <ul>
                                                      <li><a href="#" onclick="logout()">Logout</a></li>
                                                    </ul>`;
    document.getElementById('registerNav').style.display = 'none';
  }
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }
  