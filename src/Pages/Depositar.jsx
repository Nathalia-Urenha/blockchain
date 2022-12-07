import { Link } from "react-router-dom";
import Blockchain from "../helpers/Blockchain";
import { useState } from "react";
import { encryptCesar } from "../helpers/criptografia";
import { validarSenha } from "../helpers/validarSenha";

const blockchainObj = new Blockchain();
let blockchain = localStorage.getItem('blockchain');

const Deposito = (valorDeposito, senhaCriptografada) => {
    valorDeposito = parseFloat(valorDeposito);
    const saldo = blockchainObj.getLastBlock().dadosConta.saldo;
    const novoSaldo = saldo + valorDeposito;
    blockchainObj.addBlock({deposito: valorDeposito, saldo: novoSaldo, saque: blockchainObj.getLastBlock().dadosConta.saque, senha: senhaCriptografada});
    return blockchainObj;
}
export const Depositar = () => {
    const [valorDeposito, setValorDeposito] = useState(0);
    const [senha, setSenha] = useState('');
    

    const handleClick = () => {
        if(senha === ''){
            alert('Digite uma senha');
        } else {
            if(!blockchain){
                localStorage.setItem('senha', encryptCesar(senha));
                blockchain = Deposito(valorDeposito, encryptCesar(senha));
                setValorDeposito(0);
            } else{
                if(validarSenha(senha, localStorage.getItem('senha'))){
                    blockchain = Deposito(valorDeposito, encryptCesar(senha));
                    setValorDeposito(0);
                } else {
                    alert('Senha incorreta');
                }
            }
            
        } 
        
        localStorage.setItem('blockchain', JSON.stringify(blockchain, null, 2));
    };


    return (
        <div className="container">
            <div className="card">
                <h2>Depositar</h2>
                <div className="form">
                    <div>
                        <label>Quanto deseja depositar?</label>
                        <input placeholder="Valor" id="valor" type="number" value={valorDeposito} onChange={event => setValorDeposito(event.target.value)}/>
                    </div><br />
                    <div>
                        <label>Digite sua senha - Apenas letras</label>
                        <input placeholder="Senha" id="senha" type="password" value={senha} onChange={event => setSenha(event.target.value)}/>
                    </div><br/>
                    <button onClick={handleClick}>
                        Depositar
                    </button>
                    <label>Blockchain - Histórico</label><br />
                    <textarea id="blockchain" placeholder="O Blockchain (histórico) irá aparecer aqui ao final da transação" value={localStorage.getItem('blockchain', JSON.stringify(blockchain, null, 2))} disabled></textarea>
                </div>
                <div className="button-exit">
                    <Link to='/'><button>Voltar</button></Link>
                </div>
            </div>
        </div>
    )
}