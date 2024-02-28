let contatosElement = document.querySelector('.contatos');
let contatos = [];

if (localStorage.getItem('contatos')) {
  contatos = JSON.parse(localStorage.getItem('contatos'));
  listarContatos();
}


function listarContatos() {
  let contatosElement = document.querySelector('.contatos');
  contatosElement.innerHTML = '';

  contatos.forEach((element, index) => {
    let newDiv = document.createElement('div');
    newDiv.className = 'contato';
    contatosElement.appendChild(newDiv);

    let newNome = document.createElement('p');
    newNome.textContent = `Nome: ${element.nome}`
    newDiv.appendChild(newNome);

    let newTelefone = document.createElement('p');
    newTelefone.textContent = `Telefone: ${element.telefone}`
    newDiv.appendChild(newTelefone);

    let newEmail = document.createElement('p');
    newEmail.textContent = `Email: ${element.email}`
    newDiv.appendChild(newEmail);

    let excluirElement = document.createElement('button');
    excluirElement.textContent = 'Excluir Contato';
    excluirElement.onclick = function () {
      excluir(index);
    };
    newDiv.appendChild(excluirElement);
  });
}


function excluir(index) {
  contatos.splice(index, 1);
  salvarContatosNoLocalStorage();
  listarContatos();
}


function salvarContatosNoLocalStorage() {
  localStorage.setItem('contatos', JSON.stringify(contatos));
}
