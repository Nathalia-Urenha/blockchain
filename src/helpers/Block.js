const sha256 = require('crypto-js/sha256');

class Block {
    constructor(
        index = 0,
        hashAnterior = null,
        data = { saldo: 0, saque: 0, deposito: 0, senha: null },
        difficulty = 1
    ) {
        this.index = index;
        this.hashAnterior = hashAnterior;
        this.dadosConta = { saldo: data.saldo, saque: data.saque, deposito: data.deposito, senha: data.senha };
        this.timestamp = new Date();
        this.difficulty = difficulty;
        this.nonce = 0;
        this.mine();
    };

    generateHash() {
        return sha256(this.index + this.hashAnterior + JSON.stringify(this.data) + this.timestamp + this.nonce).toString();
    };

    mine() {
        this.hash = this.generateHash();

        while (!(/^0*$/.test(this.hash.substring(0, this.difficulty)))) {
            this.nonce++;
            this.hash = this.generateHash();
        };
    };
};

module.exports = Block;