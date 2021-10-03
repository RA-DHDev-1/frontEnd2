//Um título com o texto: “Login”.

document.body.innerHTML += "<h1>Login</h1>";

//Crie um formulário com campos de input e botões de submit e reset.

document.body.innerHTML += "<input (type='email', placeholder='email')></input>";

document.body.innerHTML += "<input (type='password', placeholder='password')></input>";

document.body.innerHTML += "<button>Enviar</button>";

document.body.innerHTML += "<button>Cancelar</button>";

let inputEmail = document.querySelector('input', 'email', 'placeholder');
let inputPassword = document.querySelector('input', 'password', 'placeholder');

//Insira a propriedade disabled no campo de Email.
inputEmail.disabled = true;

//Insira um estilo da sua escolha, a sugestão seriao display flex com flex-direction column.
inputEmail.style.display = 'flex';
inputEmail.style.flexDirection = 'column';
inputPassword.style.display = 'flex';
inputPassword.style.flexDirection = 'column';

let btn = document.querySelector('button');
btn.style.display = 'flex';
btn.style.flexDirection = 'column';

//Remova o atributo placeholder do email.
inputEmail.removeAttribute('placeholder');