import { Link } from "react-router-dom";
import { useState } from "react";
import { validarSenha } from "../helpers/validarSenha";

let blockchain = localStorage.getItem('blockchain');

export const Saldo = () => {
    const [senha, setSenha] = useState('');
    const [saldo, setSaldo] = useState(0);
    
    const handleClick = () => {
        if(senha === ''){
            alert('Digite uma senha');
        } else{
                if(validarSenha(senha, localStorage.getItem('senha'))){
                    blockchain = JSON.parse(localStorage.getItem('blockchain'));
                    setSaldo(blockchain.blocks[blockchain.blocks.length - 1].dadosConta.saldo);
                } else {
                    alert('Senha incorreta');
                }
            } 
        
        localStorage.setItem('blockchain', JSON.stringify(blockchain, null, 2));
    };


    return (
        <div className="container">
            <div className="card">
                <h2>Saldo</h2>
                <div className="form">
                    <div>
                        <label>Digite sua senha - Apenas letras</label>
                        <input placeholder="Senha" id="senha" type="password" value={senha} onChange={event => setSenha(event.target.value)}/>
                        <button onClick={handleClick}>
                            Visualizar
                        </button><br />
                    </div><br/>
                    <div>
                        <label>Saldo</label>
                        <input id="saldo" placeholder="Saldo" value={saldo} disabled />
                    </div><br />
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