//classe Contato
class Contato{
    constructor(nome, phone, cell, url, nascimento, email, cep, cidade, insta, git,identidade ){
        this.nome = nome;
        this.phone = phone;
        this.cell = cell;
        this.url = url;
        this.nascimento = nascimento;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.insta = insta;
        this.git = git;
        this.identidade = identidade;
        this.signo = this.pegarSigno()
    }
    //metodo para calcular a idade dos contatos
    calcularIdade(){
        let hoje = new Date();
        let nascimento = new Date(this.nascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        let mes = hoje.getMonth() - nascimento.getMonth();
        if(mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
            idade--;
        }
        return idade;
    }
    //metodo para calcular o signo dos contatos
    pegarSigno(){
        let nascimeto = new Date(this.nascimento);
        let dia = nascimeto.getDate();
        let mes = nascimeto.getMonth() + 1;
        if ((mes == 1 && dia <= 20) || (mes == 12 && dia >= 22)) {
            return "Capricórnio ♑";
        } else if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
            return "Aquário ♒";
        } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
            return "Peixes ♓";
        } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
            return "Áries ♈";
        } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
            return "Touro ♉";
        } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
            return "Gêmeos ♊";
        } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
            return "Câncer ♋";
        } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
            return "Leão ♌";
        } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
            return "Virgem ♍";
        } else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
            return "Libra ♎";
        } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
            return "Escorpião ♏";
        } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
            return "Sagitário ♐";
        }
    }
}
//classe ListaContatos
class ListaContatos{
    constructor(){
        this.arrayContatos = []; 
    }
    //metodo adicionar para dar push no array
    adicionar(contato){
        if(inputVazio()){
            mensagemDeErro("preencha todos os campos");
        }else{
            this.arrayContatos.push(contato);
        }
    }
    pegarTudo(){
        return this.arrayContatos
    }
    mostrarContatoPeloId(identidade){
        this.arrayContatos.forEach((contato) => {
            if(contato.identidade == identidade){
                mostrarAside()
            }
        })
    }
}
const listaContatos = new ListaContatos;
//function criarContato para colocar os dados dos inputs no objeto
function criarContato(){
    let nome = document.getElementById("nome").value;
    let phone = document.getElementById("phone").value;
    let cell = document.getElementById("cell").value;
    let url = document.getElementById("url").value;
    let nascimento = document.getElementById("nascimento").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let git = document.getElementById("git").value;
    let identidade = Math.floor(Math.random()*3000)
    let contato = new Contato(nome, phone, cell, url, nascimento, email, cep, cidade, insta, git, identidade);
    listaContatos.adicionar(contato);
    limparCampos()
    mostrarConteudo()
    console.log(listaContatos)
}
//function limparCampos para ... limpar os campos :/
function limparCampos() {
    document.getElementById("nome").value= "";
    document.getElementById("phone").value = "";
    document.getElementById("cell").value = "";
    document.getElementById("url").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("git").value = "";
}
//function inputVazio para verificar se nenhum input está vazio
function inputVazio(){
    let nome = document.getElementById("nome").value;
    let phone = document.getElementById("phone").value;
    let cell = document.getElementById("cell").value;
    let url = document.getElementById("url").value;
    let nascimento = document.getElementById("nascimento").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let insta = document.getElementById("insta").value;
    let git = document.getElementById("git").value;
    if(nome == "" || phone ==""  || cell == "" || url == "" || nascimento == "" || email == "" || cep == "" || cidade == "" || insta == "" || git == ""){
        return true;
    }else{
        return false;
    }
}
//function mensagemDeErro para enviar uma mensagem de erro
function mensagemDeErro(msg){
    document.getElementById("msg").innerHTML = msg;
    document.getElementById("msg").classList.remove("hidden");
    setTimeout(function(){
        document.getElementById("msg").classList.add("hidden")
    },4000)
} 

function formatarNumero(numero){
    let numeroArray = numero.split("");
    let numeroFormatado = "(" + numeroArray[0] + numeroArray[1] + ")"
        + " " + numeroArray[2] + numeroArray[3] + numeroArray[4]
        + numeroArray[5] + numeroArray[6] + "-"
        + numeroArray[7] + numeroArray[8]
        + numeroArray[9] + numeroArray[10];
    return numeroFormatado;
}
//function mostrarConteudo para colocar as informações no html
function mostrarConteudo() {
    const contatos = listaContatos.pegarTudo();
    let html = "";
    contatos.forEach((contato) => {
        html += `
            <button id="contbtn" onclick="mostrarAside"><div class="content">
              <div class="content-text">
                <h2>${contato.nome}</h2>
                <p>Telefone Fixo: ${formatarNumero(contato.phone)}</p>
                <p>Telefone Celular: ${formatarNumero(contato.cell)}</p>
              </div>
              <div class="content-image">
                <img src="${contato.url}">
            </div></button>
        `;
    });
    document.getElementById("content-container").innerHTML = html
}
function dataBr(data) {
    let dataGringa = data.split("-");
    let dataPt = dataGringa[2] + "/" + dataGringa[1] + "/" + dataGringa[0];
    return dataPt
}
function formatarCep(cep){
    let cepArray = cep.split("");
    let cepFormatado = cepArray[0] + cepArray[1] + cepArray[2]
    + cepArray[3] + cepArray[4] + "-"
    + cepArray[5] + cepArray[6]
    + cepArray[7]

    return cepFormatado
}

function mostrarAside(identidade){
    const contatoss = listaContatos.pegarTudo();
    let aside = "";
    contatoss.forEach((contato) => {
       aside += `
           <div id="aside-text">
                <div id="first-infos"
                    <h3>detalhe</h3>
                    <img src="${contato.url}">
                    <h2>${contato.nome}</h2>
                    <p>Identificador: ${contato.identidade}</p>
                </div>
                <div>
                    <p>Celular: ${formatarNumero(contato.cell)}</p>
                    <p>Telefone: ${formatarNumero(contato.tell)}</p>
                    <p>Data de nascimento: ${dataBR(contato.nascimento)}</p>
                    <p>Idade: ${contato.idade}</p>
                    <p>Signo: ${contato.signo}</p>
                    <p>Email: ${contato.email}</p>
                    <p>CEP: ${formatarCep(contato.cep)}</p>
                    <p>Cidade: ${contato.cidade}</p>
                    <p>Instragram: ${contato.insta}</p>
                    <p>Github: ${contato.git}</p>
                </div>
           </div>
        `;
    });
    document.getElementById("content-aside").innerHTML =aside
}