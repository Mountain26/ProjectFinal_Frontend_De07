document.addEventListener('DOMContentLoaded', () =>{
    let form = document.getElementById('registration-form');
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        let isValid = true;
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        fullName.classList.remove('error-border');
        email.classList.remove('error-border');
        password.classList.remove('error-border');
        confirmPassword.classList.remove('error-border');
        if(!fullName.value){
            nameError.textContent = 'Họ và tên không được để trống';
            fullName.classList.add('error-border');
            isValid = false;
        }
        if(!email.value){
            emailError.textContent = 'Địa chỉ email không được để trống';
            email.classList.add('error-border');
            isValid = false;
        }else if(!/^\S+@\S+\.\S+$/.test(email.value)){
            emailError.textContent = 'Địa chỉ email không hợp lệ';
            email.classList.add('error-border');
            isValid = false;
        }else{
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let emailExists = users.some(user => user.email === email.value);
            if(emailExists){
                emailError.textContent = 'Email đã được sử dụng';
                email.classList.add('error-border');
                isValid = false;
            }
        }
        if(!password.value){
            passwordError.textContent = 'Mật khẩu không được để trống';
            password.classList.add('error-border');
            isValid = false;
        }else if (password.value.length < 8){
            passwordError.textContent = 'Mật khẩu phải có ít nhất 8 ký tự';
            password.classList.add('error-border');
            isValid = false;
        }
        if(!confirmPassword.value){
            confirmPasswordError.textContent = 'Xác nhận mật khẩu không được để trống';
            confirmPassword.classList.add('error-border');
            isValid = false;
        }else if (confirmPassword.value !== password.value){
            confirmPasswordError.textContent = 'Xác nhận mật khẩu không khớp';
            confirmPassword.classList.add('error-border');
            isValid = false;
        }
        if(isValid){
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({
                fullName: fullName.value,
                email: email.value,
                password: password.value
            });
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = '../pages/login.html';
        }
    });
});