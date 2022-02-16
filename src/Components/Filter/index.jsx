import React from 'react';

export default class Filter extends React.Component{

    state = {
        valorMin:"",
        valorMax:"",
        PesquisaNome:""
    }

    inputMin = (ev) =>{
        this.setState({
            valorMin: ev.target.value
        })
    }

    inputMax = (ev) =>{
        this.setState({
            valorMax: ev.target.value
        })
    }

    inputPesquisaNome = (ev) =>{
        this.setState({
            PesquisaNome: ev.target.value
        })
    }

    render(){

        return(
            <div>
                <div>
                <p>Valor mínimo:</p>
                <input 
                type="number"
                value={this.state.valorMin}
                placeholder="Valor mínimo"
                onChange={this.inputMin}
                />

                <p>Valor maximo</p>
                <input 
                type="number"
                value={this.state.valorMax}
                placeholder="Valor maximo"
                onChange={this.inputMax}
                />

                <p>Pesquisa por nome:</p>
                <input 
                value={this.state.PesquisaNome}
                placeholder="Pesquisa"
                onChange={this.inputPesquisaNome}
                />
                </div>
                

            </div>
        )
    }
}