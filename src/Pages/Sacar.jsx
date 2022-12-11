import { Link } from "react-router-dom";
import { useState } from "react";
import { encryptCesar } from "../helpers/criptografia";
import { validarSenha } from "../helpers/validarSenha";
import { Saque } from "../helpers/Transacoes";


let blockchain = localStorage.getItem("blockchain");

export const Sacar = () => {
    const [valorSaque, setvalorSaque] = useState(0);
    const [senha, setSenha] = useState('');
    
    const handleClick = () => {
        if(senha === ''){
            alert('Digite uma senha');
        } else {
            if(senha === ''){
                alert('Não há saldo para saque');
            } else{
                if(validarSenha(senha, localStorage.getItem('senha'))){
                    blockchain = Saque(valorSaque, encryptCesar(senha));
                    setvalorSaque(0);
                } else {
                    alert('Senha incorreta');
                    blockchain = JSON.parse(localStorage.getItem('blockchain'));
                }
            }

        } 
        
        localStorage.setItem('blockchain', JSON.stringify(blockchain, null, 2));
    };
    return (
        <div className="container">
            <div className="card">
                <h2>Sacar</h2>
                <div className="form">
                    <div>
                        <label>Quanto deseja sacar?</label>
                        <input placeholder="Valor" id="valor" type="number" value={valorSaque} onChange={event => setvalorSaque(event.target.value)}/>
                    </div><br />
                    <div>
                        <label>Digite sua senha - Apenas letras</label>
                        <input placeholder="Senha" id="senha" type="password" value={senha} onChange={event => setSenha(event.target.value)}/>
                    </div><br/>
                    <button onClick={handleClick}>
                        Sacar
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