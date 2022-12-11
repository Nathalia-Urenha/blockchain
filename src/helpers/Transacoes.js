import Blockchain from "./Blockchain";

const blockchainObj = new Blockchain();

export function Saque(valorSaque, senhaCriptografada) {
    valorSaque = parseFloat(valorSaque);
    const saldo = blockchainObj.getLastBlock().dadosConta.saldo;
    if (saldo >= valorSaque) {
        const novoSaldo = saldo - valorSaque;
        blockchainObj.addBlock({ deposito: 0, saldo: novoSaldo, saque: valorSaque, senha: senhaCriptografada });
    } else {
        alert('Saldo insuficiente');
    }
    console.log("return", blockchainObj);
    return blockchainObj;
}

export function Deposito(valorDeposito, senhaCriptografada) {
    valorDeposito = parseFloat(valorDeposito);
    const saldo = blockchainObj.getLastBlock().dadosConta.saldo;
    const novoSaldo = saldo + valorDeposito;
    blockchainObj.addBlock({ deposito: valorDeposito, saldo: novoSaldo, saque: blockchainObj.getLastBlock().dadosConta.saque, senha: senhaCriptografada });
    return blockchainObj;
};