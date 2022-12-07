import { Link } from "react-router-dom";

let blockchain = localStorage.getItem('blockchain');

export const Blockchain = () => {
    return (
        <div className="container">
            <div className="card">
                <h2>Blockchain</h2>
                <div className="form">  
                    <textarea id="blockchain" placeholder="O Blockchain (histórico) irá aparecer aqui ao final da transação" value={localStorage.getItem('blockchain', JSON.stringify(blockchain, null, 2))} disabled></textarea>
                </div>
                <div className="button-exit">
                    <Link to='/'><button>Voltar</button></Link>
                </div>
            </div>
        </div>
    )
}