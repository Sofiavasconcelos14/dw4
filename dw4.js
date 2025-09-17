const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('password-confirmation')




form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value
  
 
if(usernameValue === ''){
    setErroFor(username, 'O nome do usuario é obrigatorio')
}  else {
    setSuccessFor(username)
}
if(emailValue === ''){
    setErroFor(email, 'O nome do usuario é obrigatorio')
}  else {
    setSuccessFor(email)
    }
if(passwordValue === ''){
    setErroFor(password, 'O nome do usuario é obrigatorio')
}  else {
    setSuccessFor(password)
    }
    
if(passwordConfirmationValue === ''){
    setErroFor(passwordConfirmation, 'O nome do usuario é obrigatorio')
}  
else if(passwordConfirmationValue !== passwordValue){

    setErroFor(passwordConfirmation, 'O nome do usuario é obrigatorio')
    }
    else{
        setSuccessFor(passwordConfirmation)
    }



}

function setErroFor(input, message){
   const formControl = input.parentElement;
   const small = formControl.querySelector('small')

   small.innertext = message 

   formControl.className = 'form-control error';
}

function setSuccessFor(input){
   const formControl = input.parentElement;
  formControl.className = 'form-control success';
} 




//serve para validar o email, que é digitado pelo usuario
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
    
}


const tipoSelect = document.querySelector('select');//serve para selecionar o select que é o campo de tipos de pessoa

//função para criar o campo cpf e cnpj 
function criarCampo(id, labelText, placeholder) {
//serve para criar a div que envolve o label e o input
  const wrapper = document.createElement('div');
  wrapper.className = 'form-control';//serve para definir a classe da div, que é a classe form-control
  wrapper.id = id + '-wrapper';//serve para definir o id da div, que é o id do input + '-wrapper'
  
//serve para criar o label que é o texto que fica em cima do input

  const label = document.createElement('label');
  label.setAttribute('for', id);//serve para definir o atributo for do label, que é o id do input que ele está associado
  label.innerText = labelText;//serve para definir o texto do label, que é o texto que aparece em cima do input

//serve para criar o input que é digitado pelo usuario no caso o cpf e cnpj

  const input = document.createElement('input');//serve para criar o input
  input.type = 'text';//serve para definir o tipo do input, o input é do tipo texto
  input.id = id;//serve para definir o id do input, id é o identificador do input
  input.placeholder = placeholder;//serve para definir o placeholder do input, placeholder é o texto que aparece dentro do input
 
//serve para adicionar o icone de erro e acerto

  const iEx = document.createElement('i');
  iEx.className = 'fas fa-exclamation-circle';
//serve para criar o icone de certo
  const iOk = document.createElement('i');
  iOk.className = 'fas fa-check-circle';
//serve para criar o small que é o texto que aparece quando o usuario digita algo errado
  const small = document.createElement('small');
  small.innerText = ''; // mensagem de erro aparecerá aqui

  
//serve para adicionar os elementos criados na div wrapper que é a div que envolve o label e o input
  wrapper.appendChild(label);
  wrapper.appendChild(input);
  wrapper.appendChild(iEx);
  wrapper.appendChild(iOk);
  wrapper.appendChild(small);
//swerve para retornar os elementos criados
  return { wrapper, input, small };
}

// cria os campos (mas não os anexa ainda)
const { wrapper: cpfWrap, input: cpfInput } = criarCampo('cpf', 'CPF', 'Digitar...');//serve para criar o campo cpf
const { wrapper: cnpjWrap, input: cnpjInput } = criarCampo('cnpj', 'CNPJ', 'Digitar...');//serve para criar o campo cnpj

//serve para adicionar os campos criados no local correto
tipoSelect.parentElement.insertAdjacentElement('afterend', cpfWrap);//serve para adicionar o campo cpf
cpfWrap.style.display = 'none';//serve para esconder o campo cpf
tipoSelect.parentElement.insertAdjacentElement('afterend', cnpjWrap);//serve para adicionar o campo cnpj
cnpjWrap.style.display = 'none';
//serve para atualizar o campo que será exibido que é o cpf ou cnpj
function atualizarTipoPessoa() {
  const val = tipoSelect.value;
//se não for cpf, nem cnpj, nenhum dos dois campos será exibido
  
if (val === 'pessoa_fisica') {
    cpfWrap.style.display = '';//serve para exibir o campo cpf
    cpfInput.required = true;//serve para tornar o campo cpf obrigatório

    cnpjWrap.style.display = 'none';//  serve para esconder o campo cnpj
    cnpjInput.required = false;//serve para tornar o campo cnpj não obrigatório
    cnpjInput.value = '';//serve para limpar o campo cnpj, caso o usuario tenha digitado algo nele
} else if (val === 'pessoa_juridica') {//  se for cnpj, o campo cnpj será exibido
    cnpjWrap.style.display = '';//serve para exibir o campo cnpj
    cnpjInput.required = true;//serve para tornar o campo cnpj obrigatório

    cpfWrap.style.display = 'none';//serve para esconder o campo cpf
    cpfInput.required = false;//serve para tornar o campo cpf não obrigatório
    cpfInput.value = '';//serve para limpar o campo cpf, caso o usuario tenha digitado algo nele


} else {
    cpfWrap.style.display = 'none';//se não for cpf, nem cnpj, nenhum dos dois campos será exibido
    cnpjWrap.style.display = 'none';//se não for cpf, nem cnpj, nenhum dos dois campos será exibido
    cnpjWrap.style.display = 'none';//se não for cpf, nem cnpj, nenhum dos dois campos será exibido
    cpfInput.required = false;//  serve para tornar o campo cpf não obrigatório
    cnpjInput.required = false;//serve para tornar o campo cnpj não obrigatório
    cpfInput.value = '';//serve para limpar o campo cpf, caso o usuario tenha digitado algo nele
    cnpjInput.value = '';//serve para limpar o campo cnpj, caso o usuario tenha digitado algo nele
  }
}

//serve para chamar a função que atualiza o campo que será exibido

atualizarTipoPessoa();
tipoSelect.addEventListener('change', atualizarTipoPessoa);


