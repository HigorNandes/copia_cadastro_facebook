class cadastro{
    constructor(name,lastname,email,password,birthdate,gender){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.gender = gender;
    }
}

let verificarEmail = document.querySelector("#email");

verificarEmail.addEventListener("blur", function(e){
    let email = verificarEmail.value;
    const verificaEmail = /\w+@\w+.com|.com.br/;
    if(verificaEmail.test(email) == false){
        window.alert("Email ou telefone invalido");
    }
});

function validaSenha(password,confirmPassword){
    if(password != confirmPassword){
        window.alert("Senhas diferentes");
    }
}

let verificaSenha = document.querySelector("#confirm-password");

verificaSenha.addEventListener("blur", function(){
    let pega_password = document.querySelector("#password");
    let password = pega_password.value;
    let pega_confirmPassword = document.querySelector("#confirm-password");
    let confirmPassword = pega_confirmPassword.value;

    validaSenha(password,confirmPassword);
})

const btnCadastar = document.querySelector("#cadastar");

btnCadastar.addEventListener("click", function(e){
    e.preventDefault();

    let pega_nome = document.querySelector("#name");
    let name = pega_nome.value;
    let pega_lastname = document.querySelector("#lastname");
    let lastname = pega_lastname.value;
    let pega_email = document.querySelector("#email");
    let email = pega_email.value;
    let pega_password = document.querySelector("#password");
    let password = pega_password.value;

    let pessoa = new cadastro(name,lastname,email,password);

    console.log(pessoa);
})