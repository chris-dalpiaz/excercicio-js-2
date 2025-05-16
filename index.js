let listaUsuarios = [];

//Função para pegar os inputs do usuário
function registrarUsuario() {
    //pegando o 'inputNome' e definindo a variável 'nome' com o valor do 'inputNome'
    const inputNome = document.getElementById("inputNome");
    const nomeUsuario = inputNome.value;

    //pegando o 'inputEmail' e definindo a variável 'email' com o valor do 'inputEmail'
    const inputEmail = document.getElementById("inputEmail");
    const emailUsuario = inputEmail.value;

    //pegando o 'inputSenha' e definindo a variável 'senha' com o valor do 'inputSenha'
    const inputSenha = document.getElementById("inputSenha");
    const senhaUsuario = inputSenha.value;

    let novoUsuario = {
        nome : nomeUsuario,
        email : emailUsuario,
        senha : senhaUsuario
    }

    //adicionando na lista meu objeto
    listaUsuarios.push(novoUsuario);

    //salvando a matriz no localStorage
    localStorage.setItem("listaDeUsuarios", JSON.stringify(listaUsuarios));
}

function carregarListas() {
    const storage = JSON.parse(localStorage.getItem("listaDeUsuarios"));
    //Se houver dados (storage não for null), listaUsuarios recebe esses dados. 
    //Caso contrário, listaUsuarios é inicializada como uma lista vazia.
    listaUsuarios = storage ? storage : [];
    for (let i = 0; i<listaUsuarios.length; i++) {
        //o i ao invés de ser a posição da lista, é o objeto dentro da lista, por isso o mesmo possui 
        //os atributos do objeto 
        const usuario = listaUsuarios[i];
        nome = usuario.nome;
        email = usuario.email;
        senha = usuario.senha;

        //chamando a função 'adicionarUsuarioNaTela', colocando cada variável em seu lugar
        adicionarUsuarioNaTela(nome, email, senha);
    }
}

function removerDados(){
    localStorage.removeItem("listaDeUsuarios");
    alert("Dados apagados com sucesso!");
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
    carregarListas();
    const botaoRegistro = document.getElementById("botaoRegistrar");
    botaoRegistro.addEventListener("click", registrarUsuario);
    
    const botaoRemoverDados = document.getElementById("botaoRemoverDados");
    botaoRemoverDados.addEventListener("click",removerDados);    
}

window.addEventListener("load", configurarEventos);