import { Link } from "react-router-dom";
import { useState } from "react";
import { encryptCesar } from "../helpers/criptografia";
import { validarSenha } from "../helpers/validarSenha";
import { Deposito } from "../helpers/Transacoes";

let blockchain = localStorage.getItem("blockchain");

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
                    blockchain = JSON.parse(localStorage.getItem('blockchain'));
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
                    <label>Blockchain - Hist??rico</label><br />
                    <textarea id="blockchain" placeholder="O Blockchain (hist??rico) ir?? aparecer aqui ao final da transa????o" value={localStorage.getItem('blockchain', JSON.stringify(blockchain, null, 2))} disabled></textarea>
                </div>
                <div className="button-exit">
                    <Link to='/'><button>Voltar</button></Link>
                </div>
            </div>
        </div>
    )
}