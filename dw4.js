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





function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
}
