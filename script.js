const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

loginButton.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
});

registerButton.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
});
