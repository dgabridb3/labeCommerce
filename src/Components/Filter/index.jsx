import React from 'react';

export default function Filter(props) {

        return(
            <div>
                <div>
                <p>Valor mínimo:</p>
                <input 
                type="number"
                value={props.valorMin}
                 placeholder={"Valor mínimo"}
                onChange={props.inputMin}
                />

                <p>Valor maximo</p>
                <input 
                type="number"
                value={props.valorMax}
                placeholder="Valor maximo"
                onChange={props.inputMax}
                />

                <p>Pesquisa por nome:</p>
                <input 
                value={props.PesquisaNome}
                placeholder="Pesquisa"
                onChange={props.inputPesquisaNome}
                />
                </div>
                
            </div>
        )
    }