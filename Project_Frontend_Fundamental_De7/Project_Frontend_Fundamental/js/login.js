let loginForm = document.querySelector('form');
let loginEmail = document.getElementById('email');
let loginPassword = document.getElementById('password');
let loginEmailError = document.getElementById('emailError');
let loginPasswordError = document.getElementById('passwordError');
loginForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    loginEmailError.textContent = '';
    loginPasswordError.textContent = '';
    loginEmail.classList.remove('error-border');
    loginPassword.classList.remove('error-border');
    let emailPattern = /\S+@\S+\.com$/;
    if(!emailPattern.test(loginEmail.value)){
        loginEmailError.textContent = 'Email không hợp lệ';
        loginEmail.classList.add('error-border');
        return;
    }
    if(loginPassword.value.length < 8){
        loginPasswordError.textContent = 'Mật khẩu phải có ít nhất 8 ký tự và không được bỏ trống';
        loginPassword.classList.add('error-border');
        return;
    }
    let adminEmail = "admin@gmail.com";
    let adminPassword = "admin123";
    if(
        loginEmail.value === adminEmail &&
        loginPassword.value === adminPassword
    ){
        window.location.href = '../pages/test-manager.html';
        return;
    }
    let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    let isValidLogin = false;
    for(let user of storedUsers){
        if(
            user.email === loginEmail.value &&
            user.password === loginPassword.value
        ){
            isValidLogin = true;
            window.location.href = '../pages/home-page.html'
            break;
        }
    }
    if(!isValidLogin){
        loginPasswordError.textContent = 'Mật khẩu sai hoặc tài khoản không tồn tại';
        loginPassword.classList.add('error-border');
    }
});