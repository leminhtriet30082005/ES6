const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

const registerError = document.getElementById('register-error');
const loginError = document.getElementById('login-error');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (registeredUsers.find(user => user.username === username)) {
        registerError.textContent = 'Username already exists.';
        registerError.style.display = 'block';
    } else {
        registeredUsers.push({ username, password });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        registerError.style.display = 'none';
        alert('đăng kí thành công!');
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('Tên đăng nhập').value;
    const password = document.getElementById('mật khẩu đăng nhập').value;

    const user = registeredUsers.find(user => user.username === username && user.password === password);

    if (user) {
        loggedInUser = user;
        localStorage.setItem('người dùng đã đăng nhập', JSON.stringify(loggedInUser));
        loginError.style.display = 'none';
        alert('Đăng nhập thành công!');
    } else {
        loginError.textContent = 'Sai tên hoặc mật khẩu.';
        loginError.style.display = 'block';
    }
});

if (loggedInUser) {
    alert('Bạn đã đang nhập.');
    
}
