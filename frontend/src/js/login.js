
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupRedirectButton = document.getElementById('redirect-button');

    if (signupRedirectButton) {
        signupRedirectButton.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const emailInput = document.getElementById('email-input');
            const passwordInput = document.getElementById('password-input');

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                showToast('Email and password are required.', 'error');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();

                if (response.status === 200) {
                    localStorage.setItem('user', JSON.stringify(data));
                    showToast('Login successful! Redirecting...', 'success');
                    setTimeout(() => {
                        window.location.href = 'home.html';
                    }, 1500);
                } else {
                    const errorMessage = data.message || 'Invalid credentials';
                    showToast(errorMessage, 'error');
                }
            } catch (error) {
                console.error('Login error:', error);
                showToast('An unexpected error occurred. Please try again.', 'error');
            }
        });
    }
});
