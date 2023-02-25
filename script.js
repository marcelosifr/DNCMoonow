let teste = document.querySelector('.b1')
let inputObrigatorio = document.querySelectorAll('.campo-obrigatorio')
let error = document.querySelectorAll('.error')


function validacao() {
    if (inputObrigatorio[0].value === ""){
        error[0].innerHTML = `Favor preencher nome completo`;
        error[0].style.color = "#e73550";
        inputObrigatorio[0].style.borderColor = "#e73550";
    } else {
        error[0].innerHTML = ``;
        inputObrigatorio[0].style.borderColor = "";
    }

    if (inputObrigatorio[1].value === ""){
        error[1].innerHTML = `Favor preencher e-mail corretamente`;
        error[1].style.color = "#e73550";
        inputObrigatorio[1].style.borderColor = "#e73550";
    } else {
        error[1].innerHTML = ``;
        inputObrigatorio[1].style.borderColor = "";
    }

    if (inputObrigatorio[0].value === "" || inputObrigatorio[1].value === ""){
        error[2].innerHTML = `Não foi possível efetuar o seu cadastro.`;
        error[2].style.color = "#e73550";
    } else {
        error[2].innerHTML = `Cadastro efetuado com sucesso.`;
        error[2].style.color = "#0f7b0f";
        inputObrigatorio[0].value = "";
        inputObrigatorio[1].value = "";
    }

    return false;
}