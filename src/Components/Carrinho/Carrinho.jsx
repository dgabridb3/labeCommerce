import React from "react";
import ItemCar from "./ItemCar";
class Carrinho extends React.Component{

    valueTotal = () =>{
        let valorTotal = 0
        for (let product of this.props.listaDeProdutos){
            valorTotal += product.value * product.quantidade;
        }
        return valorTotal
    }

    render(){
        return(
            <>
            <h3>Carrinho: </h3>
            {this.props.listaDeProdutos.map((product)=>{
                    return  <ItemCar itemCar={product} remove={this.props.removeProduto} />
                })}
            <p>Valor Total: R${this.valueTotal()},00</p>
            </>
        )
    }
}

export default Carrinho