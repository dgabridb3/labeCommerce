import React from "react";
import styled from "styled-components";
import "./App.css";
import Carrinho from "./Components/Carrinho/Carrinho";
import Filter from "./Components/Filter";

const ConteinerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: blueviolet;
  color: white;
  padding: 3px;
  height: 100vh;
  column-gap: 0.5%;
`;

const Div = styled.div`
  border: 1px solid white;
  padding: 2%;
`;

/* inicio estilização card */
const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 30%; */
`;
const CardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
const Card = styled.div`
  border: 1px solid white;
  width: 100%;
  height: 100%;
`;
const CardFilho = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`;
const IMG = styled.img`
  width: 100%;
  height: 200px;
`;
const H4 = styled.h4`
  margin: 10px 0;
`;
const P = styled.p`
  margin: 5px 0;
`;
/* fim estilização card */

const produtos = [
  {
    id: 1,
    name: "Foguete da mt020",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/280",
  },
  {
    id: 2,
    name: "Avião da T1000",
    value: 500.0,
    imageUrl: "https://picsum.photos/200/250",
  },
  {
    id: 3,
    name: "Foguete da z33",
    value: 100.0,
    imageUrl: "https://picsum.photos/200/201",
  },
  {
    id: 4,
    name: "Foguete da Missão Apollo 11",
    value: 50.0,
    imageUrl: "https://picsum.photos/200/220",
  },
];

class App extends React.Component {
  state = {
    products: produtos,
    valorMin: "",
    valorMax: "",
    PesquisaNome: "",
    ordem: 1,

    listaDeProduto: []
  };


  addProductInCar = (productId) => {
    const produtoCar = this.state.listaDeProduto.find(
      (product) => productId === product.id
    );
    if (produtoCar) {
      const novoProductInCar = this.state.listaDeProduto.map((product) => {
        if (productId === product.id) {
          return {
            ...product,
            quantidade: this.state.quantidade + 1
          };
        }
        
        return product;
      });
      this.setState({ listaDeProduto: novoProductInCar });
    } else {
      const produtoAdd = this.state.products.find(
        (product) => productId === product.id
      );
      const novoProdutoInCart = [
        ...this.state.listaDeProduto,
        { ...produtoAdd, quantidade: 1},
      ];
      this.setState({ listaDeProduto: novoProdutoInCart });
      
    }
   
  };
  
  removeProduto = (productId) =>{
    const removendo = this.state.listaDeProduto.map((product) =>{
      if(product.id === productId){
        return {
          ... product,
          quantidade: product.quantidade - 1
        }
      }
      return product
    }).filter((product) => product.quantidade > 0)
    this.setState({listaDeProduto: removendo})

  }

  inputMin = (ev) => {
    this.setState({
      valorMin: ev.target.value,
    });
  };

  inputMax = (ev) => {
    this.setState({
      valorMax: ev.target.value,
    });
  };

  inputPesquisaNome = (ev) => {
    this.setState({
      PesquisaNome: ev.target.value,
    });
  };

  order = (ev) => {
    this.setState({
      ordem: ev.target.value,
    });
  };

  render() {
    const listaDeProdutos = this.state.products
      .filter((product) => {
        return (
          this.state.valorMin === "" || product.value >= this.state.valorMin
        );
      })
      .filter((product) => {
        return (
          this.state.valorMax === "" || product.value <= this.state.valorMax
        );
      })
      .filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.state.PesquisaNome.toLowerCase());
      })
      .sort((crescente, decrescente) => {
        switch (this.state.ordem) {
          
          default:
            return this.state.ordem * (crescente.value - decrescente.value)
        }
      })
      .map((product) => {
        return (
          <Card>

            <IMG src={product.imageUrl}  alt="" />
            <CardFilho key={product.id}>
              <H4>{product.name}</H4>
              <P>R${product.value}</P>
              <button onClick={() => this.addProductInCar(product.id)}>
                Adicionar ao Carrinho
              </button>
            </CardFilho>
          </Card>
        );
      });

    return (
      <ConteinerPrincipal>
        <Div>
          <p>Olá filtro</p>
          {this.state.valorMax}
          <Filter
            valorMin={this.state.valorMin}
            valorMax={this.state.valorMax}
            PesquisaNome={this.state.PesquisaNome}
            inputMin={this.inputMin}
            inputMax={this.inputMax}
            inputPesquisaNome={this.inputPesquisaNome}
          />
        </Div>

        <Div>
          <Div1>
            <p>Quantidade de produtos: {listaDeProdutos.length}</p>
            <div>
              <label>Ordenção:</label>
              <select
              nome="ordem"
              value={this.state.ordem}
              onChange={this.order}
              >
                <option value={1}>
                  Crescente
                </option>
                <option value={-1}>
                  Decrescente
                </option>
              </select>
            </div>
          </Div1>

          <CardSection >{listaDeProdutos}</CardSection>
        </Div>

        <Div>
          <Carrinho
             key={listaDeProdutos.id}
            produto={this.state.products}
            listaDeProdutos={this.state.listaDeProduto}
            removeProduto={this.removeProduto}
           
          />
           
        </Div>
      </ConteinerPrincipal>
    );
  }
}

export default App;
