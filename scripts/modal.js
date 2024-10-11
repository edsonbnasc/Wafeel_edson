
document.getElementById('ModalOpen').addEventListener('click', modal);// chama a funcao do modal


function modal() {
  document.body.classList.add("no-scroll");//adiciona a classe para bloquear a rolagem da pagina quando modal esta ativo
  document.getElementById('modal_login').classList.add('active')  
}

document.getElementById('modalClose').addEventListener('click', modalClose);

function modalClose() {
  document.getElementById('modal_login').classList.remove('active')
  document.body.classList.remove("no-scroll");//remove a class para voltar a rolagem
}


// abre a confirmacao de login
document.getElementById('conflogin').addEventListener('click', () => {
  document.getElementById('contex').innerHTML = `<h2>Seu login foi efetuado com sucesso!</h2>`
  login();
});

function login() {
  const intervalo = setInterval(() => {
    document.getElementById('confirmacao').classList.add('active')
}, 1000); 

// Após 3 segundos, para a execução.
setTimeout(() => {
  document.getElementById('confirmacao').classList.remove('active')
  clearInterval(intervalo); 
}, 3000); // 3 segundos
}

// abre a confirmacao de cadastro
document.getElementById('confcad').addEventListener('click', () => {
  document.getElementById('contex').innerHTML = `<h2>Seu cadastro foi efetuado com sucesso!</h2>`
  login();
});