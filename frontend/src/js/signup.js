
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginRedirectButton = document.getElementById('redirect-button');

    if (loginRedirectButton) {
        loginRedirectButton.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name-input');
            const emailInput = document.getElementById('email-input');
            const passwordInput = document.getElementById('password-input');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!name || !email || !password) {
                showToast('All fields are required.', 'error');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/auth/create-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                });

                const data = await response.json();

                if (response.status === 201) {
                    showToast('Signup successful! Redirecting to login...', 'success');
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1500);
                } else {
                    // Handle validation errors or other server errors
                    const errorMessage = data.errors ? data.errors[0][Object.keys(data.errors[0])[0]] : data.message;
                    showToast(errorMessage, 'error');
                }
            } catch (error) {
                console.error('Signup error:', error);
                showToast('An unexpected error occurred. Please try again.', 'error');
            }
        });
    }
});
