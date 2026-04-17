document.addEventListener('DOMContentLoaded', async () => {
  // 1. Fetch current session state
  try {
    const res = await fetch('/PawsConnect/api/session');
    if (res.ok) {
      const data = await res.json();
      window.currentUser = data.loggedIn ? data.user : null;
      updateNavbar(data);
    }
  } catch (err) {
    console.error('Failed to fetch session', err);
  }

  // 2. Intercept Login/Register form if on login.html
  const emailPanel = document.getElementById('emailPanel');
  if (emailPanel) {
    // In our HTML, we had handleEmailAuth() onClick, but wait... 
    // The user had `type="submit"` and form action="login". Let's intercept submit.
    emailPanel.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(emailPanel);
      const actionUrl = emailPanel.getAttribute('action') === 'register' ? '/PawsConnect/register' : '/PawsConnect/login';
      
      // Basic client validation
      if (document.getElementById('emailSpinner')) {
          document.getElementById('emailSpinner').style.display = 'block';
          document.getElementById('emailBtnText').style.display = 'none';
          document.getElementById('emailSubmitBtn').disabled = true;
      }
      
      try {
        const response = await fetch(actionUrl, {
          method: 'POST',
          body: new URLSearchParams(formData)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
           if (actionUrl.includes('register')) {
               // Show success and switch to login mode
               alert('Registration successful! Please sign in.');
               if (typeof switchMode === 'function') switchMode('login');
           } else {
               // Login success, redirect back
               const returnTo = new URLSearchParams(window.location.search).get('return') || 'index.html';
               window.location.href = returnTo;
           }
        } else {
           if (typeof showError === 'function') {
               showError('emailError', result.error || 'Authentication failed.');
           } else {
               alert(result.error || 'Authentication failed.');
           }
        }
      } catch (err) {
          console.error(err);
          if (typeof showError === 'function') {
              showError('emailError', 'Network error. Please try again.');
          }
      } finally {
          if (document.getElementById('emailSpinner')) {
              document.getElementById('emailSpinner').style.display = 'none';
              document.getElementById('emailBtnText').style.display = 'inline';
              document.getElementById('emailSubmitBtn').disabled = false;
          }
      }
    });
  }
});

function updateNavbar(sessionData) {
  const navLinks = document.getElementById('navLinks');
  if (!navLinks) return;
  
  if (sessionData.loggedIn) {
    const firstName = sessionData.user.fullName.split(' ')[0];
    
    // Inject User Greeting & Logout
    const greetingLi = document.createElement('li');
    greetingLi.innerHTML = `<span style="color:var(--forest); font-weight:500;">Hi, ${firstName}</span>`;
    
    const logoutLi = document.createElement('li');
    const logoutBtn = document.createElement('a');
    logoutBtn.href = '#';
    logoutBtn.className = 'nav-cta';
    logoutBtn.style.background = 'var(--moss)';
    logoutBtn.textContent = 'Logout';
    logoutBtn.onclick = async (e) => {
        e.preventDefault();
        await fetch('/PawsConnect/logout');
        window.location.reload();
    };
    logoutLi.appendChild(logoutBtn);
    
    navLinks.appendChild(greetingLi);
    navLinks.appendChild(logoutLi);
  } else {
    // Inject Join Free
    const joinLi = document.createElement('li');
    const joinBtn = document.createElement('a');
    joinBtn.href = 'login.html';
    joinBtn.className = 'nav-cta';
    joinBtn.textContent = 'Join Free';
    joinLi.appendChild(joinBtn);
    
    navLinks.appendChild(joinLi);
  }
}
