let telefone = document.getElementById('telefone');
let email = document.getElementById('email');
let nome = document.getElementById('nome');
let contatosElement = document.querySelector('.contatos');

let contatos = [];

if (localStorage.getItem('contatos')) {
  contatos = JSON.parse(localStorage.getItem('contatos'));
  
}

function cadastrar() {
  if (telefone.value === '' && email.value === '' && nome.value === '') {
    alert('Favor preencher todos os campos para cadastrar um novo contato...');
  } else {
    let objeto = {
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
    };
    contatos.push(objeto);
    salvarContatosNoLocalStorage();
    
  }
  telefone.value = '';
  nome.value = '';
  email.value = '';
}

function excluir(index) {
  contatos.splice(index, 1);
  salvarContatosNoLocalStorage(); 
  alert(`Contato: ${index} excluído`);
  
}

function carregarContatosDoLocalStorage() {
  let contatosArmazenados = localStorage.getItem('contatos');
  if (contatosArmazenados) {
    contatos = JSON.parse(contatosArmazenados);
  }
}

carregarContatosDoLocalStorage();


function salvarContatosNoLocalStorage() {
  localStorage.setItem('contatos', JSON.stringify(contatos));
}
