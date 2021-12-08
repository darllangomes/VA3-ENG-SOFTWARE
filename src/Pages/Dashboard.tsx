import React from 'react';
import "../styles/dashboard.css";



export function Dashboard(){
    return(
        <div className={"container"}>
            <div className={"top_bar"}><p>Bem Vinda, Joana!</p></div>
            <div className={"inform"}>
                <div className={"card"}>
                    <p>Configure sua renda Mensal</p>
                </div>
                <div className={"card"}>
                    <p>Crie um aviso de limite de gastos</p>
                </div>
                <div className={"card"}>
                    <p>Registrar Despesas</p>
                </div>
            </div>
            <div className={"bottom_bar"}>

            </div>
        </div>
    );
}