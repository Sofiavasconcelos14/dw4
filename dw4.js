// parte 1 __________________________________________________________________________________________________________________________________________________
//essa parte é para pegar os elementos do html e colocar em variaveis

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const cpf = document.getElementById("cpf");
const cnpj = document.getElementById("cnpj");
const tipos = document.getElementById("tipos");
const pessoaFisica = document.getElementById("pessoa_fisica");
const pessoaJuridica = document.getElementById("pessoa_juridica");

// parte 2 __________________________________________________________________________________________________________________________________________________
//essa parte é para quando clicar no botão de enviar, ele não atualizar a pagina

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

//parte3__________________________________________________________________________________________________________________________________________________
//essa parte é para verificar se os campos estão preenchidos corretamente

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  const cpfValue = cpf.value;
  const cnpjValue = cnpj.value;
  const tiposValue = tipos.value;

  //paete4__________________________________________________________________________________________________________________________________________________
  //essa parte é para mostrar ou esconder ou validar os campos de acordo com o que o usuario escolher no select

  if (usernameValue === "") {
    setErroFor(username, "O nome do usuario é obrigatorio");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErroFor(email, "O nome do usuario é obrigatorio");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue === "") {
    setErroFor(password, "A senha é obrigatória");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErroFor(passwordConfirmation, "A confirmação é obrigatória");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErroFor(passwordConfirmation, "As senhas não conferem");
  } else {
    setSuccessFor(passwordConfirmation);
  }
  if (tiposValue === "") {
    setErroFor(username, "O nome do usuario é obrigatorio");
  } else {
    setSuccessFor(tipos);
  }

  if (tiposValue === "pessoa_fisica") {
    if (cpfValue === "") {
      setErroFor(cpf, "O CPF é obrigatório");
    } else {
      setSuccessFor(cpf);
    }
  }

  if (tiposValue === "pessoa_juridica") {
    if (cnpjValue === "") {
      setErroFor(cnpj, "O CNPJ é obrigatório");
    } else {
      setSuccessFor(cnpj);
    }
  }
  if (tiposValue === "") {
    setErroFor(tipos, "");
  } else {
    setSuccessFor(tipos);
  }
}
//parte5__________________________________________________________________________________________________________________________________________________
//essa parte é para mostrar ou esconder os campos de acordo com o que o usuario escolher no select

document.getElementById("tipos").addEventListener("change", function () {
  //isso é para mostrar ou esconder os campos

  const pessoa_fisica = document.getElementById("pessoa_fisica"); //isso é para mostrar ou esconder os campos que são pessoa fisica
  const pessoa_juridica = document.getElementById("pessoa_juridica"); //isso é para mostrar ou esconder os campos que são pessoa juridica

  if (tipos.value === "pessoa_fisica") {
    //isso é para mostrar ou esconder os campos
    pessoa_fisica.hidden = false;       //se for pessoa fisica, mostra o campo cpf, o false é para mostrar o campo cpf
    pessoa_juridica.hidden = true;       //se for pessoa fisica, esconde o campo cnpj, o true é para esconder o campo cnpj
  } else if (tipos.value === "pessoa_juridica") {
    //isso é para mostrar ou esconder os campos
    pessoa_fisica.hidden = true;        //se for pessoa juridica, esconde o campo cpf
    pessoa_juridica.hidden = false;     //se for pessoa juridica, mostra o campo cnpj
  } else {
    //se não for nenhum dos dois, esconde os dois campos
    pessoa_fisica.hidden = true;      //se não for nenhum dos dois, esconde o campo cpf
    pessoa_juridica.hidden = true;    s//se não for nenhum dos dois, esconde o campo cnpj
  }
});
//parte5__________________________________________________________________________________________________________________________________________________
//essa parte é para mostrar a mensagem de erro ou sucesso

function setErroFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//serve para validar o email, que é digitado pelo usuario
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
