function send() {
    var email = document.querySelector('#email').value;
    var senha = document.querySelector('#password').value;
    if (email.endsWith('@gmail.com')) {
        if (senha.length > 8) {
            location.href = '/proxima-pagina';
        } else {
            alert('Senha Curta');
        }
    } else {
        alert('Email Invalido');
    }
}
