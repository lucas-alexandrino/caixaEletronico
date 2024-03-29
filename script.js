
nome = prompt("Bem vindo ao Banco do Brazil com Z \n Qual é seu nome?");
alert("Olá " + nome + " é um prazer ter você por aqui!");

var saldo = 100.5; //Float

function inicio() {
    var senha = prompt("Por favor, informe sua senha:");
    if (senha !== "3589") {
        alert("Senha incorreta. Tente novamente.");
        inicio();
        return;
    }

    var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair'));

    switch (escolha) {
        case 1:
            ver_saldo();
            break;
        case 2:
            ver_extrato();
            break;
        case 3:
            fazer_saque();
            break;
        case 4:
            fazer_deposito();
            break;
        case 5:
            transferencia();
            break;
        case 6:
            sair();
            break;
        default:
            erro();
    }
}

function ver_saldo() {
    alert('Seu saldo atual é: ' + saldo);
    inicio();
}

function fazer_deposito() {
    var deposito = parseFloat(prompt('Qual o valor para depósito?'));
    if (isNaN(deposito) || deposito <= 0) {
        alert('Operação não autorizada!');
        inicio();
        return;
    }
    saldo += deposito;
    ver_saldo();
}

function fazer_saque() {
    var saque = parseFloat(prompt('Qual o valor para saque?'));
    if (isNaN(saque) || saque <= 0 || saque > saldo) {
        alert('Operação não autorizada!');
        inicio();
        return;
    }
    saldo -= saque;
    ver_saldo();
}

function ver_extrato() {
    var extrato = ["Padaria do seu Zé: R$100", "Supermercado: R$400", "Lojinha: R$200", "Petshop: R$1100"];
    alert("Seu extrato é: \n" + extrato.join("\n"));
    inicio();
}

function transferencia() {
    var conta = parseInt(prompt("Qual o número da conta que você deseja transferir?"));
    var valor = parseFloat(prompt("Qual o valor que você deseja transferir?"));

    if (isNaN(conta) || isNaN(valor) || valor <= 0 || valor > saldo) {
        alert('Operação não autorizada!');
        inicio();
        return;
    }

    saldo -= valor;
    alert("Transferência realizada com sucesso!");
    ver_saldo();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        alert(nome + " Foi um prazer ter você por aqui!");
        window.close();
    } else {
        inicio();
    }
}

inicio();