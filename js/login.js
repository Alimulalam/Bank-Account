document.getElementById('login-btn').addEventListener('click', function () {
    const emialValue = document.getElementById('email-field');
    const userEmail = emialValue.value;

    const passwordValue = document.getElementById('password-field');
    const userPassword = passwordValue.value;

    if (userEmail === 'alimul@gmail.com' && userPassword === 'alimul1234') {
        window.location.href = '../bank.html';
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
});

document.getElementById('eye-icon').addEventListener('click', function () {

    const passwordValue = document.getElementById('password-field');

    passwordValue.toggleAttribute('type');
    // passwordValue.setAttribute('type', 'password');


    // const passwordValue = document.getElementById('password-field').removeAttribute("type");






})
