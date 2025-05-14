//Função para pegar os inputs do usuário
function registrarUsuario() {
    //pegando o 'inputNome' e definindo a variável 'nome' com o valor do 'inputNome'
    const inputNome = document.getElementById("inputNome");
    const nome = inputNome.value;

    //pegando o 'inputEmail' e definindo a variável 'email' com o valor do 'inputEmail'
    const inputEmail = document.getElementById("inputEmail");
    const email = inputEmail.value;

    //pegando o 'inputSenha' e definindo a variável 'senha' com o valor do 'inputSenha'
    const inputSenha = document.getElementById("inputSenha");
    const senha = inputSenha.value;

    //chamando a função 'adicionarUsuarioNaTela', colocando cada variável em seu lugar
    adicionarUsuarioNaTela(nome, email, senha);
}

function adicionarUsuarioNaTela(nomeUsuario, emailUsuario, senhaUsuario) {
    //puxando a tabela do meu html
    const tabelaUsuarios = document.getElementById("tabelaUsuarios");
    //criando a linha(tr) da minha tabela
    const linhaTabelaUsuario = document.createElement("tr");
    //vinculando a 'linhaTabelaUsuarios' a minha 'tabelaUsuarios'
    tabelaUsuarios.appendChild(linhaTabelaUsuario);

    //criando a coluna(td) onde será mostrado o nome do usuário
    const colunaTabelaNome = document.createElement("td");
    //atribuindo o valor da variável 'nomeUsuário' a minha coluna do nome
    colunaTabelaNome.innerText = nomeUsuario;
    //vinculando a coluna do nome a minha 'linhaTabelaUsuario'(tr)
    linhaTabelaUsuario.appendChild(colunaTabelaNome);

    //---- APARECER E-MAIL E SENHA NA TABELA -----

    //criando a coluna(td) onde será mostrado o e-mail do usuário
    const colunaTabelaEmail = document.createElement("td");
    //atribuindo o valor da variável 'emailUsuário' a minha coluna do e-mail
    colunaTabelaEmail.innerText = emailUsuario;
    //vinculando a coluna do e-mail a minha 'linhaTabelaUsuario'(tr)
    linhaTabelaUsuario.appendChild(colunaTabelaEmail);

    //criando a coluna(td) onde será mostrado a senha do usuário
    const colunaTabelaSenha = document.createElement("td");
    //atribuindo o valor da variável 'senhaUsuario' a minha coluna da senha
    colunaTabelaSenha.innerText = senhaUsuario;
    //vinculando a coluna da senha a minha 'linhaTabelaUsuario'(tr)
    linhaTabelaUsuario.appendChild(colunaTabelaSenha);
}

function configurarEventos() {
    console.log("Pagina carregada");
    const botaoRegistro = document.getElementById("botaoRegistrar");
    botaoRegistro.addEventListener("click", registrarUsuario);
}

window.addEventListener("load", configurarEventos);