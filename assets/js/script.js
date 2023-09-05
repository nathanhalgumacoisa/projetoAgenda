//classe Contado
class Contado{
    constructor(nome, phone, cell, url, nascimento, email, cep, cidade, insta, git ){
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
}
const ListaContatos = new ListaContatos;
//function criarContato para colocar os dados dos inputs no objeto
function criarContato(){
    let
}