function login(){
    var nome = $('Nome').val()
    var senha = $('Senha').val()

    console.log(nome, senha)
}
function showPassword(){
    var input_senha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    if(input_senha .getAttribute('type') == 'password'){
        input_senha.setAttribute('type','text')
        img_eye.setAttribute('src', './Images/eye.png')
    }else{
        input_senha.setAttribute('type', 'password')
        img_eye.setAttribute('src', './Images/eye-not.png')
    }
}