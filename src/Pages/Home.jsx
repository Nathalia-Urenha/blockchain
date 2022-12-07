import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <div className="container">
            <div className="card">
                <h2>Blockchain</h2>
                <h3>Selecione uma opção</h3><br/>
                <div className="form">
                <Link to='/Depositar'><button>Depositar</button></Link>
                <Link to='/Sacar'><button>Sacar</button></Link>
                <Link to='/Saldo'><button>Saldo</button></Link>
                <Link to='/Blockchain'><button>Visualizar Blockchain - Histórico</button></Link>
                </div>
            </div>
        </div>

    )
};